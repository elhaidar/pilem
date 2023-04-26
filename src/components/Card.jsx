import { forwardRef } from "react";

// eslint-disable-next-line react/display-name
const Card = forwardRef((props, ref) => {
  // eslint-disable-next-line react/prop-types
  const { image, classname, onClick } = props;
  return (
    <div
      className={
        classname +
        ` cursor-pointer transition-all duration-300 hover:brightness-50`
      }
      onClick={onClick}
      ref={ref}
    >
      <img src={image} alt="" className="rounded-2xl" />
    </div>
  );
});

export default Card;
