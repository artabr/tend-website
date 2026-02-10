"use client"

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        heading: { value: "Inter, sans-serif" },
        body: { value: "Inter, sans-serif" },
      },
      colors: {
        primary: {
          50: { value: "#e8f7fc" },
          100: { value: "#c5ebf7" },
          200: { value: "#9edcf1" },
          300: { value: "#77cdeb" },
          400: { value: "#5fc3e7" },
          500: { value: "#47b9e3" },
          600: { value: "#3fa8cf" },
          700: { value: "#3592b5" },
          800: { value: "#2c7c9b" },
          900: { value: "#1f5a70" },
          950: { value: "#153d4d" },
        },
        slate: {
          850: { value: "hsl(222deg 47% 16%)" },
        },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          DEFAULT: {
            value: { _light: "{colors.white}", _dark: "{colors.gray.900}" },
          },
          subtle: {
            value: { _light: "{colors.gray.50}", _dark: "{colors.gray.800}" },
          },
          muted: {
            value: { _light: "{colors.gray.100}", _dark: "{colors.gray.700}" },
          },
        },
        fg: {
          DEFAULT: {
            value: { _light: "{colors.gray.900}", _dark: "{colors.gray.100}" },
          },
          muted: {
            value: { _light: "{colors.gray.600}", _dark: "{colors.gray.400}" },
          },
          subtle: {
            value: { _light: "{colors.gray.400}", _dark: "{colors.gray.500}" },
          },
        },
      },
    },
  },
  globalCss: {
    "html, body": {
      bg: "bg",
      color: "fg",
    },
  },
})

export const system = createSystem(defaultConfig, config)
