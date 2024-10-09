import { Form, Link, useLoaderData } from "react-router-dom";
import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
import FormRange from "./FormRange";
import FormCheckbox from "./FormCheckbox";

const Filters = () => {
  const { meta, params } = useLoaderData();
  const { search, company, category, shipping, order, price } = params;
  return (
    <Form className="bg-base-200 rounded-md px-8 py-4 grid gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* جستجو  */}
      <FormInput
        type="search"
        label="جستجو ی کالا"
        name="search"
        size="input-sm"
        defaultValue={search}
      />
      {/* دسته بندی */}
      <FormSelect
        lable="دسته بندی"
        name="category"
        list={meta.categories}
        size="select-sm"
        defaultValue={category}
      />
      {/* کمپانی ها */}
      <FormSelect
        lable="انتخاب برند"
        name="company"
        list={meta.companies}
        size="select-sm"
        defaultValue={company}
      />
      {/* نمایش بر اساس */}
      <FormSelect
        lable="نمایش بر اساس"
        name="order"
        list={["a-z", "z-a", "high", "low"]}
        size="select-sm"
        defaultValue={order}
      />
      {/* رنج قیمت */}
      <FormRange name="price" label="انتخاب رنج قیمت" size="checkbox-sm" price={price}/>
      {/* چک باکس ارسال رایگان */}
      <FormCheckbox
        name="shipping"
        label="ارسال رایگان"
        size="checkbox-sm"
        defaultValue={shipping}

      />
      {/* دکمه ها */}
      <button type="submit" className="btn btn-primary btn-sm mt-3">
        جستجو
      </button>
      <Link to="/products" className="btn btn-accent btn-sm mt-3">
        ریست
      </Link>
    </Form>
  );
};
export default Filters;
