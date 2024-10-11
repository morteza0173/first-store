import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { useLoaderData } from "react-router-dom";
dayjs.extend(jalaliday);
dayjs.calendar("jalali");
dayjs.locale("fa"); // تنظیم زبان به فارسی

const OrderList = () => {
  const { orders, meta } = useLoaderData();

  return (
    <div className="mt-8">
      <h4 className="mb-4 capitalize">
        تعداد سفارشات ثبت شده : {meta.pagination.total}
      </h4>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* سربرگها */}
          <thead>
            <tr>
              <th>نام</th>
              <th>آدرس</th>
              <th>تعداد محصولات</th>
              <th>مبلغ پرداخت شده</th>
              <th>تاریخ</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              const id = order.id;
              const { name, address, numItemsInCart, orderTotal, createdAt } =
                order.attributes;
              const date = dayjs(createdAt).format("HH:mm - D MMMM YYYY");

              return (
                <tr key={id}>
                  <td>{name}</td>
                  <td>{address}</td>
                  <td>{numItemsInCart}</td>
                  <td>{orderTotal}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderList;
