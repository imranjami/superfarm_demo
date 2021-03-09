import React from "react"
import logo from "./assets/logo.svg"
import mobile_logo from "./assets/mobile_logo.svg"
import search_icon from "./assets/search.svg"
import notification from "./assets/notification.svg"
import profile_pic from "./assets/profile_pic.png"
import dropdown from "./assets/dropdown.svg"

import "./Header.css"

function Header() {
  return (
    <div className="header">
      <div className="header__mobile">
        <i class="fas fa-bars"></i>
        <img className="header__mobileLogo" src={mobile_logo} />
        <img className="header__profilePic" src={profile_pic} />
      </div>

      <div className="header__left">
        <img className="header__logo" src={logo} />
        <ul>
          <li>My Farms</li>
          <li>View Farms</li>
          <li>NFTS</li>
          <li className="header__button">+ Create NFT</li>
        </ul>
      </div>
      <div className="header__right">
        <div className="header__search">
          <img src={search_icon} />
          <input placeholder="Search NFTs & Farms" type="text"></input>
        </div>
        <img className="header__notification" src={notification} />
        <img className="header__profilePic" src={profile_pic} />
        <div className="header__wallet">
          <p>0x9ea2...</p>
          <img src={dropdown} />
        </div>
      </div>
    </div>
  )
}

export default Header
