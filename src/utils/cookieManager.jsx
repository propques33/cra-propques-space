import Cookies from "js-cookie";

const CookieManager = {
  setCookie: (name, value, days = 7) => {
    Cookies.set(name, value, { expires: days });
  },
  getCookie: (name) => {
    return Cookies.get(name);
  },
  deleteCookie: (name) => {
    Cookies.remove(name);
  },
};

export default CookieManager;
