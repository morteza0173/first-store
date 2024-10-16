import { NavLink } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import NavLinks from "./NavLinks";

import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/user/userSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const handleTheme = () => {
    dispatch(toggleTheme());
  };

  const numItemInCart = useSelector((state) => state.cartState.numItemsInCart);

  return (
    <nav className="bg-base-200">
      <div className="navbar align-element">
        <div className="navbar-start">
          {/* لوگو */}
          <NavLink
            to="/"
            className="hidden lg:flex btn btn-primary text-xl items-center"
          >
            مری شاپ
          </NavLink>
          {/* منوی دراپ دان */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-lg dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
            >
              <NavLinks />
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            <NavLinks />
          </ul>
        </div>
        <div className="navbar-end">
          {/* تغییر تم */}
          <label className="swap swap-rotate">
            <label className="swap">
              {/* چک باکس مخفی برای کنترل استیت */}
              <input type="checkbox" onChange={handleTheme} />

              {/* ایکون خورشید */}
              <BsSunFill className="swap-on fill-current w-4 h-4" />

              {/* ایکون ماه */}
              <BsMoonFill className="swap-off fill-current w-4 h-4" />
            </label>
          </label>
          {/* لینک سبد */}
          <NavLink to="/cart" className="btn btn-ghost btn-circle btn-md mr-4">
            <div className="indicator">
              <BsCart3 className="h-6 w-6" />
              <span className="badge badge-sm badge-primary indicator-item pt-1">
                {numItemInCart}
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
