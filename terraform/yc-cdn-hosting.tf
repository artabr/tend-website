# Объявление переменных для конфиденциальных параметров

variable "folder_id" {
  type = string
}

variable "domain" {
  type = string
}

variable "cert_id" {
  type = string
}

variable "dns_zone_id" {
  type = string
}

# Настройка провайдера

terraform {
  required_providers {
    yandex = {
      source = "yandex-cloud/yandex"
    }
  }
  required_version = ">=0.136.0"
}

# Получение информации о TLS-сертификате

data "yandex_cm_certificate" "imported_certificate" {
  certificate_id = var.cert_id
}

data "yandex_dns_zone" "imported_dns_zone" {
  dns_zone_id = var.dns_zone_id
}

# Создание бакета

resource "yandex_storage_bucket" "frontend_bucket" {
  bucket    = "${var.domain}-frontend-bucket"
  folder_id = var.folder_id
  max_size  = "1073741824"
  website {
    index_document = "index.html"
    error_document = "404.html"
  }
  https {
    certificate_id = data.yandex_cm_certificate.imported_certificate.id
  }

  depends_on = [data.yandex_cm_certificate.imported_certificate]
}

# Настройка прав доступа для бакета

resource "yandex_storage_bucket_grant" "frontend_bucket_grant" {
  bucket = yandex_storage_bucket.frontend_bucket.id
  grant {
    uri         = "http://acs.amazonaws.com/groups/global/AllUsers"
    permissions = ["READ"]
    type        = "Group"
  }
  depends_on = [yandex_storage_bucket.frontend_bucket]
}

# Создание записи DNS

resource "yandex_dns_recordset" "dns_recordset" {
  zone_id    = data.yandex_dns_zone.imported_dns_zone.id
  name       = "@"
  type       = "CNAME"
  ttl        = 600
  data       = [data.yandex_cdn_resource.cdn_resource.provider_cname]
  depends_on = [yandex_cdn_resource.cdn_resource]
}

# Получение информации о ресурсе CDN

data "yandex_cdn_resource" "cdn_resource" {
  resource_id = yandex_cdn_resource.cdn_resource.id
}

# Создание группы источников

resource "yandex_cdn_origin_group" "cdn_origin_group" {
  name     = "${var.domain}-frontend-origin-group"
  use_next = true
  origin {
    source = "${var.domain}.website.yandexcloud.net"
  }
}

# Создание ресурса CDN

resource "yandex_cdn_resource" "cdn_resource" {
  cname             = var.domain
  active            = true
  origin_protocol   = "http"
  origin_group_name = yandex_cdn_origin_group.cdn_origin_group.name
  options {
    custom_host_header     = "${var.domain}.website.yandexcloud.net"
    redirect_http_to_https = true
  }
  ssl_certificate {
    type                   = "certificate_manager"
    certificate_manager_id = data.yandex_cm_certificate.imported_certificate.id
  }
}
