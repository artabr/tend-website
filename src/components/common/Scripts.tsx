import Script from 'next/script';

export const Scripts = () => {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://sibforms.com/forms/end-form/build/sib-styles.css"
      />
      <Script
        id="Brevo"
        strategy="lazyOnload"
        src="https://sibforms.com/forms/end-form/build/main.js"
      />
      <Script id="BrevoInit">
        {`window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
          window.LOCALE = 'en';
          window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "The information provided is invalid. Please
          review the field format and try again.";

          window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank. ";

          window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and
          try again.";


          window.translation = {
              common: {
                  selectedList: '{quantity} list selected',
                  selectedLists: '{quantity} lists selected',
                  selectedOption: '{quantity} selected',
                  selectedOptions: '{quantity} selected',
              }
          };

          var AUTOHIDE = Boolean(0);`}
      </Script>
      <Script src="https://www.google.com/recaptcha/api.js?hl=en" />
      <Script
        id="GTM"
        src="https://www.googletagmanager.com/gtag/js?id=G-6P6M0B3N2W"
      />
      <Script id="GTMInit">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-6P6M0B3N2W');`}
      </Script>
      <Script
        id="Cookiebot"
        src="https://consent.cookiebot.com/uc.js"
        data-cbid="d8bdbe4e-7251-4d95-b244-3231ae896f35"
        data-blockingmode="auto"
      />
    </>
  );
};
