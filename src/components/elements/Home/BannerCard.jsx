/* eslint-disable react/prop-types */

// import { useState } from "react";

// eslint-disable-next-line react/display-name
const BannerCard = ({ children }) => {
  return (
    <div
      className={
        "px-2 w-screen max-w-[1366px] lg:px-8 pt-8 flex justify-around items-end mt-auto mb-4 lg:mb-8"
      }
    >
      {children}
    </div>
  );
};

export default BannerCard;
