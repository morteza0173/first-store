import { useState } from "react";
import { formatPrice } from "../utils";

const FormRange = ({ label, name, size, price }) => {
  const step = 1000;
  const maxPrice = 1000000;
  const [selectedPrice, setSelectedPrice] = useState(price || maxPrice);
  const { formated } = formatPrice(selectedPrice);
  return (
    <div className="form-control">
      <label htmlFor={name} className="label cursor-pointer ">
        <span className="label-text">{label}</span>
        <span>{formated}</span>
      </label>
      <input
        type="range"
        name={name}
        min={0}
        max={maxPrice}
        value={selectedPrice}
        onChange={(e) => setSelectedPrice(parseInt(e.target.value, 10))}
        step={step}
        className={`range range-primary ${size}`}
      />
      <div className="w-full flex justify-between text-xs px-2 mt-2">
        <span className="font-bold">حداقل: 0 تومان</span>
        <span className="font-bold">حداکثر: یک میلیارد</span>
      </div>
    </div>
  );
};
export default FormRange;
