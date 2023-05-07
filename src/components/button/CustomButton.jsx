import classNames from "classnames";
import React, { useMemo } from "react";

const CustomButton = ({ children, className, color, selected, ...props }) => {
  const tempColor = useMemo(
    () => color[Math.floor(Math.random() * color?.length)],
    []
  );

  return (
    <div>
      <button
        style={{
          color: `${tempColor?.color}`,
          borderColor: `${tempColor?.color}`,
          background: selected === children && `${tempColor?.opacity}`,
        }}
        className={classNames(
          className,
          "px-5 md:px-5 py-1 hover:scale-105 font-normal cursor-pointer text-base md:text-lg text-opacity-60 border border-[#8C0B0B99] border-opacity-80 rounded-[30px] capitalize"
        )}
        {...props}
      >
        {children}
      </button>
    </div>
  );
};

export default CustomButton;
