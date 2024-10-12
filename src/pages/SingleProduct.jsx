import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice, generateAmountOptions } from "../utils";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const singleProductQuery = (id) => {
  return {
    queryKey: ["singleProduct", id],
    queryFn: () => customFetch(`/products/${id}`),
  };
};

export const loader =
  (queryClient) =>
  async ({ params }) => {
    const response = await queryClient.ensureQueryData(
      singleProductQuery(params.id)
    );

    return { product: response.data.data };
  };

const SingleProduct = () => {
  const { product } = useLoaderData();
  console.log(product);
  const { image, title, price, description, colors, company } =
    product.attributes;

  const { formated } = formatPrice(price);

  const [productsColor, setProductsColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  const cartProduct = {
    cartID: product.id + productsColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productsColor,
    amount,
  };

  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  return (
    <section>
      <div className="breadcrumbs">
        <ul>
          <li>
            <Link to="/">صفحه اصلی</Link>
          </li>
          <li>
            <Link to="/products">محصولات</Link>
          </li>
        </ul>
      </div>
      {/* محصول */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* تصویر */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* اطلاعات محصول */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{formated}</p>
          <p className="mt-6 leading-8 ">{description}</p>
          {/* انتخاب رنگ */}
          <div className="mt-6">
            <h4 className="font-medium ">رنگ ها</h4>
            <div className="mt-2">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    className={`badge w-6 h-6 ml-2 ${
                      color === productsColor && "border-2 border-secondary"
                    }`}
                    type="button"
                    style={{ backgroundColor: color }}
                    onClick={() => setProductsColor(color)}
                  ></button>
                );
              })}
            </div>
          </div>
          {/* تعداد محصول */}
          <div className="form-control w-full max-w-xs">
            <label className="label" htmlFor="amount">
              <h4 className="font-medium">تعداد</h4>
            </label>
            <select
              id="amount"
              className="select select-secondary select-bordered select-md"
              value={amount}
              onChange={handleAmount}
            >
              {generateAmountOptions(5)}
            </select>
          </div>
          {/* دکمه افزودن به سبد خرید */}
          <div className="mt-10 ">
            <button className="btn btn-secondary btn-md" onClick={addToCart}>
              افزودن به سبد خرید
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SingleProduct;
