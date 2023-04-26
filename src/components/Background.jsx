/* eslint-disable react/prop-types */
const Background = (props) => {
  // "127px -104px 200px 100px rgba(0,0,0,1) inset"
  const { image } = props;
  const style = {
    backgroundImage: `url(${image})`,
    backgroundRepeat: "repeat",
    width: "100vw",
    height: "100vh",
    position: "fixed",
    top: "0",
    // boxShadow: "627px -150px 200px 200px rgba(0,0,0,1) inset",
  };
  return (
    <div
      style={style}
      className="-z-50 bg-cover bg-left-center shadow-mobile lg:bg-[90%] lg:bg-contain lg:shadow-desktop"
    ></div>
  );
};

export default Background;
