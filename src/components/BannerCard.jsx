/* eslint-disable react/prop-types */

import { forwardRef } from "react";

// import { useState } from "react";

// eslint-disable-next-line react/display-name
const BannerCard = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <div className={"flex justify-around items-end mt-10 mb-4"} ref={ref}>
      {children}
    </div>
  );
});

export default BannerCard;
