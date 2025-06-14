import React from "react";

function Footer() {
  return (
    <div className="text-center p-6 bg-black footer">
      <span className="text-white">
        &copy; {new Date().getFullYear()} Copyright -{" "}
      </span>
      <a
        className="link-underline text-white font-bold"
        href="https://rahulkarda.netlify.app"
      >
        Alok Mahato
      </a>
    </div>
  );
}

export default Footer;
