import { Form, redirect } from "react-router-dom";
import FormInput from "./FormInput";
import SubmitBtn from "./SubmitBtn";
import { customFetch, formatPrice } from "../utils";
import { clearCart } from "../features/cart/cartSlice";
import { toast } from "react-toastify";

export const action =
  (store,queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);

    const user = store.getState().userState.user;
    const { cartItems, orderTotal, numItemsInCart } =
      store.getState().cartState;

    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal).formated,
      cartItems,
      numItemsInCart,
    };
    console.log(info);

    try {
      const response = await customFetch.post(
        "/orders",
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      queryClient.removeQueries(['orders'])
      store.dispatch(clearCart());
      toast.success("خرید شما با موفقیت ثبت شد");

      return redirect("/orders");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "لطفا اطلاعات را به صورت صحیح وارد کنید";
      toast.error(errorMessage);
      if (error?.response?.status === 401 || 403) {
        return redirect("/login");
      }
      return null;
    }
  };

const CheckoutForm = () => {
  return (
    <Form method="POST" className="flex flex-col gap-y-4">
      <h4 className="font-medium text-xl ">اطلاعات آدرس</h4>
      <FormInput label="نام" name="name" type="text" />
      <FormInput label="آدرس" name="address" type="text" />
      <div className="mt-4">
        <SubmitBtn text="ثبت نهایی سفارش" />
      </div>
    </Form>
  );
};
export default CheckoutForm;
