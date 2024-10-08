import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  if (error.status === 404) {
    return (
      <main className="grid min-h-screen place-items-center px-8">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">۴۰۴</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            صفحه پیدا نشد
          </h1>
          <p className="mt-4 text-lg leading-7">
            متاسفانه نتونستیم صفحه ای که دنبالش هستی رو پیدا کنیم
          </p>
          <div className="mt-10">
            <Link to="/" className="btn btn-secondary">
              بازگشت به صفحه اصلی
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="grid min-h-screen place-items-center px-8">
      <h4 className="text-center font-bold text-4xl">خطایی رخ داد</h4>
    </main>
  );
};
export default Error;
