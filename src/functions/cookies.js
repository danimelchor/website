// Helper function to set a cookie
export const setCookie = (c_name, value, exdays) => {
  var exdate = new Date();
  exdate.setDate(exdate.getDate() + exdays);
  var c_value =
    escape(value) +
    (exdays === null ? "" : "; expires=" + exdate.toUTCString());
  document.cookie = c_name + "=" + c_value;
};

// Helper function to read a cookie's value
export const getCookie = (c_name) => {
  var i,
    x,
    y,
    ARRcookies = document.cookie.split(";");
  for (i = 0; i < ARRcookies.length; i++) {
    x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
    y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
    x = x.replace(/^\s+|\s+$/g, "");
    if (x === c_name) {
      return unescape(y);
    }
  }
};

// Helper function to set the correct classList depending on theme on load
export const setTheme = () => {
  let current = getCookie("theme") || document.documentElement.classList[0];
  if (!current || current === "dark") {
    document.documentElement.classList.add("dark");
    return "dark";
  } else {
    document.documentElement.classList.remove("dark");
    return "light";
  }
};

// Helper function to change the classList depending on theme (if cookies accepted)
export const changeTheme = () => {
  let current = getCookie("theme") || document.documentElement.classList[0];

  if (current === "dark") {
    // Making sure we are allowed to store their data
    if (
      localStorage.getItem("danielmelchor.com__cookiesAccepted") !== null &&
      localStorage.getItem("danielmelchor.com__cookiesAccepted")
    )
      setCookie("theme", "light", 36500);

    document.documentElement.classList.remove("dark");
    return "light";
  } else {
    // Making sure we are allowed to store their data
    if (
      localStorage.getItem("danielmelchor.com__cookiesAccepted") !== null &&
      localStorage.getItem("danielmelchor.com__cookiesAccepted")
    )
      setCookie("theme", "dark", 36500);

    document.documentElement.classList.add("dark");
    return "dark";
  }
};
