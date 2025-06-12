import React from "react";
import classes from "./header.module.css";
import { GrLocation } from "react-icons/gr";
import { MdOutlineSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import LowerHeader from "./LowerHeader";

function Header() {
  return (
    <>
      <section>
        {/* first div  */}
        <div className={classes.header_container}>
          {/* logo  */}
          <div className={classes.logo_container}>
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                alt="amazon logo"
              />
            </a>

            {/* deliver  */}
            <div className={classes.delivery}>
              <span>
                <GrLocation />
              </span>
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* second div  */}
          <div className={classes.search}>
            {/* search  */}
            <select name="#" id="#">
              <option value="">All</option>
            </select>
            <input
              type="text"
              name="#"
              id="#"
              placeholder="search product"
            ></input>
            <MdOutlineSearch size={25} />
          </div>

          {/* third div  */}
          <div className={classes.order_container}>
            <a href="/order" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg.png"
                alt="US Flag"
              />
              <section>
                <option value="">En</option>
              </section>
            </a>

            <a href="/cart">
              <div>
                <p>Sign In</p>
                <span>Account & Lists</span>
              </div>
            </a>
            {/* orders  */}
            <a href="/order">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart  */}

            <a href="/cart" className={classes.cart}>
              <BsCart2 size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <section>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
