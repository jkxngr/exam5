import React from "react";
import clsx from "clsx";
import { RightArrowIcon } from "../../assets/icon/right-arrow-icon";
export const Button = ({ children, variant, onClick, type }) => {
  return (
    <button
      className={clsx(
        "flex items-center gap-2.5 rounded-[16px] px-[39px] py-[29px]",
        {
          "inline-block bg-Arapawa text-white": variant === "primary",
          "inline-block bg-FunkyYellow text-[20px] text-Arapawa":
            variant === "secondary",
          "inline-block rounded-[16px] border-2 border-Arapawa text-[20px] text-Arapawa":
            variant === "bordered",
        },
      )}
    >
      {children}
      <RightArrowIcon />
    </button>
  );
};
