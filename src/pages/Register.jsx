import { Form, Link } from "react-router-dom";
import { FormInput, SubmitBtn } from "../components";

const Register = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="POST"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-3xl font-bold">عضویت</h4>
        <FormInput type="text" label="نام کاربری" name="username" />
        <FormInput type="email" label="ایمیل" name="email" />{" "}
        <FormInput type="password" label="پسورد" name="password" />
        <div className="mt-4">
          <SubmitBtn text="عضویت" />
        </div>
        <p className="text-center">
          عضو سایت هستید ؟{" "}
          <Link to="/login" className="mr-2 link link-hover link-primary">
            ورود
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
