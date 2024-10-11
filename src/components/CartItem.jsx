import { useDispatch } from "react-redux";
import { formatPrice, generateAmountOptions } from "../utils";
import { editItem, removeItem } from "../features/cart/cartSlice";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  const removeItemFromTheCart = () => {
    dispatch(removeItem({ cartID }));
  };

  const handleAmount = (e) => {
    dispatch(editItem({ cartID, amount: parseInt(e.target.value) }));
  };

  const { cartID, title, price, image, amount, company, productsColor } =
    cartItem;
  return (
    <article
      key={cartID}
      className="mb-12 flex flex-col gap-y-4 sm:flex-row flex-wrap border-b border-base-300 pb-6 last:border-b-0"
    >
      {/* تصویر کالا */}
      <img
        src={image}
        alt={title}
        className="h-24 w-24 rounded-lg sm:h-32 sm:w-32 object-cover"
      />
      {/*اطلاعات کالا*/}
      <div className="sm:mr-16 sm:w-48">
        {/* نام کالا */}
        <h3 className="font-medium">{title}</h3>
        {/* برند کالا */}
        <h4 className="mt-2 text-sm text-neutral-content">{company}</h4>
        {/* رنگ */}
        <p className="mt-4 text-sm flex items-center gap-x-2">
          رنگ :
          <span
            className="badge badge-sm"
            style={{ backgroundColor: productsColor }}
          ></span>
        </p>
      </div>

      <div className="sm:mr-12">
        {/* تعداد */}
        <div className="form-control max-w-xs">
          <label htmlFor="amount" className="label p-0">
            <span className="label-text">تعداد</span>
          </label>
          <select
            name="amount"
            id="amount"
            className="mt-2 select select-bordered select-xs"
            value={amount}
            onChange={handleAmount}
          >
            {generateAmountOptions(amount + 5)}
          </select>
        </div>
        {/* حذف */}
        <button
          className="mt-4 link link-primary link-hover text-sm"
          onClick={removeItemFromTheCart}
        >
          حذف کالا
        </button>
      </div>

      {/* قیمت */}
      <p className="font-medium sm:mr-auto">{formatPrice(price).formated}</p>
    </article>
  );
};
export default CartItem;
