import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

export const action =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      const response = await customFetch.post("/auth/local", data);
      store.dispatch(loginUser(response.data));
      toast.success("ورود با موفقیت انجام شد");
      return redirect("/");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.error?.message ||
        "اطلاعات وارد شده را به صورت صحیح وارد کنید";
      toast.error(errorMessage);
      return null;
    }

    return null;
  };

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginAsGuestUser = async () => {
    try {
      const response = await customFetch.post("/auth/local", {
        identifier: "morteza@test.com",
        password: "morteza",
      });
      dispatch(loginUser(response.data));
      toast.success("به محیط تستی برنامه خوش آمدید");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("ورود به عنوان مهمان با خطا مواجه شد ، دوباره امتحان کنید");
    }
  };

  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">ورود</h4>
        <FormInput type="email" label="ایمیل" name="identifier" />
        <FormInput type="password" label="پسورد" name="password" />
        <div className="mt-4">
          <SubmitBtn text="ورود" />
        </div>
        <button
          type="button"
          className="btn btn-secondary btn-block"
          onClick={loginAsGuestUser}
        >
          ورود به عنوان مهمان برای تست
        </button>
        <p className="text-center">
          هنوز عضو سایت نشده اید ؟{" "}
          <Link to="/register" className="mr-2 link link-hover link-primary">
            عضو شوید
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
