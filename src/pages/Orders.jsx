import { redirect, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";
import { customFetch } from "../utils";
import {
  OrderList,
  ComplexPaginationContainer,
  SectionTitle,
} from "../components";

export const loader =
  (store) =>
  async ({ request }) => {
    const user = store.getState().userState.user;
    if (!user) {
      toast.warn("برای مشاهده سفارشات باید وارد سایت شوید");
      return redirect("/login");
    }
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    try {
      const response = await customFetch.get("/orders", {
        params,
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      console.log(response);

      return { orders: response.data.data, meta: response.data.meta };
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "مشکلی در دریافت داده ها رخ داده";
      toast.error(errorMessage);
      if (error.response.status === 401 || 403) {
        return redirect("/login");
      }
      return null;
    }
  };

const Orders = () => {
  const { meta } = useLoaderData();
  if (meta.pagination.total < 1) {
    return <SectionTitle text="شفارشی جهت نمایش وجود ندارد" />;
  }
  return (
    <>
      <SectionTitle text="سفارشات شما" />
      <OrderList />
      <ComplexPaginationContainer />
    </>
  );
};
export default Orders;
