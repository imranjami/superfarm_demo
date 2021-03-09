import React from "react"
import degen_waifu from "./assets/degen_waifu.png"
import time from "./assets/time.svg"
import gem_hunter from "./assets/gem_hunter.png"
import seller_icon from "./assets/seller_icon.svg"
import collection_icon from "./assets/collection_icon.svg"
import share_icon from "./assets/share_icon.svg"
import chevron_right from "./assets/chevron-right.svg"

import "./ProductCard.css"

function ProductCard() {
  let title = "NFT for sale!"
  let seller = "Martha_Contrera"
  let collection = "RandomWarrior"
  let issue_no = "No"
  let access = "public"
  let max_allocation = "1"
  let total_nfts = "180"

  return (
    <div className="productCard">
      <div className="productCard__time">
        <img src={time} />
        <p>13h 23mins</p>
      </div>
      <div className="productCard__top__mobile">
        <h1>{title}</h1>
        <p>13h 23mins</p>
      </div>
      <div className="productCard__top">
        <img src={gem_hunter} />
        <div className="productCard__body">
          <h1>{title}</h1>
          <div className="productCard__seller">
            <div className="productCard__seller__name">
              <img src={seller_icon} />
              <p>{seller}</p>
              <img src={share_icon} />
            </div>
            <div className="productCard__seller__collection">
              <img src={collection_icon} />
              <p>{collection}</p>
            </div>
          </div>
          <div className="productCard__info">
            <p>
              Issue # <span>{issue_no}</span>
            </p>
            <b>•</b>
            <p>
              Access <span>{access}</span>
            </p>
            <b>•</b>
            <p>
              Max allocation <span>{max_allocation}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="productCard__bottom">
        <div className="productCard__bottom__left">
          <div className="productCard__bottom__total">Total NFTs</div>
          <div className="productCard__bottom__number">{total_nfts}</div>
          <div className="productCard__bottom__description">
            View all of this drop's
          </div>
        </div>
        <img src={chevron_right} />
        <div className="productCard__bottom__right">
          <img src={gem_hunter}></img>
          <img src={gem_hunter}></img>
          <img src={gem_hunter}></img>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
