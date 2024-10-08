import { Link } from "react-router-dom";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { useEffect, useRef, useState } from "react";

const carouselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  const carouselRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        const { scrollWidth, clientWidth } = carouselRef.current;

        // به تصویر بعدی برو
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % carouselImages.length; // اگر به آخرین عکس رسید، به عکس اول برگرد
          const offset = nextIndex * -320; // مقدار پیمایش بر اساس عرض واقعی اسلایدها

          carouselRef.current.scrollTo({
            left: offset,
            behavior: "smooth",
          });

          return nextIndex;
        });
      }
    }, 3000); // هر ۳ ثانیه

    return () => clearInterval(interval); // تمیز کردن وقتی کامپوننت از بین میره
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-3xl font-bold sm:leading-normal sm:text-6xl">
          قراره خرید متفاوتی اینجا داشته باشی
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
        </p>
        <div className="mt-10">
          <Link to="/products" className="btn btn-primary btn-block">
            محصولات ما
          </Link>
        </div>
      </div>
      <div
        className="hidden h-[28rem] lg:carousel carousel-center p-4 overflow-x-auto bg-neutral rounded-box"
        ref={carouselRef}
      >
        {carouselImages.map((image) => {
          return (
            <div key={image} className="carousel-item mx-4">
              <img
                src={image}
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Hero;
