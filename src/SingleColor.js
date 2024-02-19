import React from "react";


const SingleColor = ({ rgb, weight, hex, index, handleCopied}) => {

  let bkg = rgb.join(",");

  return (
    <article
      key={index}
      style={{
        background: `rgb(${bkg})`,
      }}
      className="w-[241.3px] md:w-[14rem] h-28 cursor-pointer "
      onClick={() => handleCopied(hex)}
    >
      <h1 className={`${index > 10 ? "text-white" : "text-black"} px-8 pt-8`}>
        {weight}%
      </h1>
      <h1
        className={`${index > 10 ? "text-white" : "text-black"} px-8`}
      >{`#${hex}`}</h1>

    </article>
  );
};

export default SingleColor;
