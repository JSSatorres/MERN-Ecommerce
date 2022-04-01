import React from "react";


function Footer() {
  return (
    <footer className="bg-indigo-500 text-white mt-5 py-5  text-center  border-t-2 border-indigo-900">
      &copy; {new Date().getFullYear()}  MERN PRODUCTS
    </footer>
  );
}

export default Footer;
