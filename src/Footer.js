import React from "react"
import footer_logo from "./assets/footer_logo.svg"
import "./Footer.css"

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img src={footer_logo} />
        <ul>
          <li>My Farms</li>
          <li>View Farms</li>
          <li>NFTS</li>
        </ul>
      </div>
      <div className="footer__right">
        <p>© SuperFarm 2020, All Rights Reserved</p>
        <ul className="footer__socials">
          <li>
            <i class="fab fa-telegram-plane"></i>
          </li>
          <li>
            <i class="fab fa-twitter"></i>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
