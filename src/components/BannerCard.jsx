/* eslint-disable react/prop-types */

import { forwardRef } from "react";

// import { useState } from "react";

// eslint-disable-next-line react/display-name
const BannerCard = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <div
      className={"flex justify-around items-end mt-auto mb-4 lg:mb-8"}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default BannerCard;
