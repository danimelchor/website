import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Notification = () => (
  <ToastContainer
    theme="colored"
    autoClose={800}
    closeOnClick
    pauseOnFocusLoss={false}
    draggable={false}
    pauseOnHover={false}
  />
);
export default Notification;
