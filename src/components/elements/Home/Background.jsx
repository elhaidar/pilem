/* eslint-disable react/prop-types */
const Background = (props) => {
  // "127px -104px 200px 100px rgba(0,0,0,1) inset"
  const { image } = props;
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "no-repeat",
    width: "100%",
    maxWidth: "1366px",
    height: "100%",
    position: "fixed",
    top: "0",
    // boxShadow: "627px -150px 200px 200px rgba(0,0,0,1) inset",
  };
  return (
    <div
      style={style}
      className="-z-50 bg-cover bg-center shadow-mobile lg:bg-[90%] lg:bg-contain lg:shadow-desktop lg:bg-left-center"
    ></div>
  );
};

export default Background;
