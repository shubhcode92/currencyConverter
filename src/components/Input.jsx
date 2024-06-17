import React, { useId } from "react";

const Input = ({
  label,
  className = "",
  amount,
  onCurrencyOptions,
  onCurrencyChange,
  selectCurrency,
  onAmountChange,
  amountDisable = false
}) => {
  const id = useId();

  return (
  <div className={`bg-white p-3 rounded-lg text-sm flex `}>

    <div className='w-1/2'>
      <label htmlFor={id} className="text-black/40 mb-2 inline-block">
        {label}
      </label>
      <input
          type="number"
          id={id}
          className="outline-none w-full bg-transparent py-1.5"
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisable}
      />
    </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange(e.target.value)}
          >
          {onCurrencyOptions.map((option) => (
            <option key={option} value={option}>
              {option.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
  </div>
  );
};

export default Input;
