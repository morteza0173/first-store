import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Login = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">ورود</h4>
        <FormInput
          type="email"
          label="ایمیل"
          name="identifier"
          defaultValue="text@text.com"
        />
        <FormInput
          type="password"
          label="پسورد"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-4">
          <SubmitBtn text="ورود" />
        </div>
        <button type="button" className="btn btn-secondary btn-block">
          ورود به عنوان مهمان
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
