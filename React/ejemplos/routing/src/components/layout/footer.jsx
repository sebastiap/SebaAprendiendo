import React from "react";
const anio = new Date().getFullYear();

function Footer() {
  return (
    <footer>
      <p>CopyrightÂ© {anio} by Sebastian Picardi</p>
    </footer>
  );
}

export default Footer;
