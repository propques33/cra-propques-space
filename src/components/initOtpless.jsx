// export const initOTPless = (callback) => {
//   const otplessInit = Reflect.get(window, "otplessInit");

//   const loadScript = () => {
//     const isScriptLoaded = document.getElementById("otpless-sdk");
//     if (isScriptLoaded) return;

//     const script = document.createElement("script");
//     script.id = "otpless-sdk";
//     script.type = "text/javascript";
//     script.src = "https://otpless.com/v3/auth.js";
//     script.setAttribute("data-appid", "KCVG0LAFJB534R0YLC8U");
//     document.body.appendChild(script);
//     console.log("Script load")
//   };

//   otplessInit ? otplessInit() : loadScript();

//   Reflect.set(window, "otpless", callback);
// };

export const initOTPless = (callback) => {
  const otplessInit = Reflect.get(window, "otplessInit");

  const loadScript = () => {
    const isScriptLoaded = document.getElementById("otpless-sdk");
    if (isScriptLoaded) return;

    const script = document.createElement("script");
    script.id = "otpless-sdk";
    script.type = "text/javascript";
    script.src = "https://otpless.com/v3/auth.js";
    // TODO: Add your app id
    script.setAttribute("data-appid", "KCVG0LAFJB534R0YLC8U");
    document.body.appendChild(script);
  };

  otplessInit ? otplessInit() : loadScript();

  Reflect.set(window, "otpless", callback);
};
