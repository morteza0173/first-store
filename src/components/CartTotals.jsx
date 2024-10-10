import { useSelector } from "react-redux";
import { formatPrice } from "../utils";

const CartTotals = () => {
  const { formated } = formatPrice();

  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* قیمت کالا ها */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>قیمت کالاها</span>
          <span className="font-medium">{formatPrice(cartTotal).formated}</span>
        </p>
        {/* هزینه ارسال */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>هزینه ارسال</span>
          <span className="font-medium">{formatPrice(shipping).formated}</span>
        </p>
        {/* مالیات */}
        <p className="flex justify-between text-xs border-b border-base-300 pb-2">
          <span>مالیت</span>
          <span className="font-medium">{formatPrice(tax).formated}</span>
        </p>
        {/* قیمت نهایی */}
        <p className="flex justify-between text-sm mt-4 font-bold pb-2">
          <span>قیمت نهایی</span>
          <span className="font-medium">
            {formatPrice(orderTotal).formated}
          </span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
