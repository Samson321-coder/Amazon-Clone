import React from "react";
import classes from "./header.module.css";
import { GrLocation } from "react-icons/gr";
import { MdOutlineSearch } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase"

function Header() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <>
      <section className={classes.fixed}>
        <section>
          {/* first div  */}
          <div className={classes.header_container}>
            {/* logo  */}
            <div className={classes.logo_container}>
              <Link to="/">
                <img
                  src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png"
                  alt="amazon logo"
                />
              </Link>

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
              <MdOutlineSearch size={38} />
            </div>

            {/* third div  */}
            <div className={classes.order_container}>
              <Link to="#" className={classes.language}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/960px-Flag_of_the_United_States.svg.png?20240524035322"
                  alt="us flag"
                />
                <section>
                  <select name="#" id="#">
                    <option value="">EN</option>
                  </select>
                </section>
              </Link>

              <Link to={!user && "/auth"}>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]} </p>
                      <span onClick={() => auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello, Sign In</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
              </Link>
              {/* orders  */}
              <Link to="/order">
                <p>returns</p>
                <span>& Orders</span>
              </Link>
              {/* cart  */}

              <Link to="/cart" className={classes.cart}>
                <BsCart2 size={35} />
                <span>{totalItem}</span>
              </Link>
            </div>
          </div>

          <LowerHeader />
        </section>
      </section>
    </>
  );
}

export default Header;
