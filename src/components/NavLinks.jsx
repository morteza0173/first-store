import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const links = [
  { id: 1, url: "/", text: "صفحه اصلی" },
  { id: 2, url: "about", text: "درباره ی ما" },
  { id: 3, url: "products", text: "محصولات" },
  { id: 4, url: "cart", text: "سبد خرید" },
  { id: 5, url: "checkout", text: "پرداخت" },
  { id: 6, url: "orders", text: "سفارشات ثبت شده" },
];

const NavLinks = () => {
  const user = useSelector((state) => state.userState.user);

  return (
    <>
      {links.map((link) => {
        const { id, url, text } = link;
        if ((url === "checkout" || url === "orders") && !user) return null;
        return (
          <li key={id}>
            <NavLink to={url}>{text}</NavLink>
          </li>
        );
      })}
    </>
  );
};
export default NavLinks;
