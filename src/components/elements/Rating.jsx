import {
  faStar as faStarFilled,
  faStarHalfAlt,
} from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const STAR_COUNT = 5;

// eslint-disable-next-line react/prop-types
const Rating = ({ value }) => {
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => (
    <FontAwesomeIcon
      icon={faStar}
      className="text-lg text-yellow-200 lg:text-2xl"
      key={i}
    />
  ));
  let i;
  for (i = 0; i < value; i++) {
    // this will loop Math.floor(value) times
    stars[i] = (
      <FontAwesomeIcon
        icon={faStarFilled}
        className="text-lg text-yellow-200 lg:text-2xl"
        key={`stars${i}`}
      />
    );
  }

  if (value % 1 != 0)
    // if value is a decimal, add a half star
    stars[i - 1] = (
      <FontAwesomeIcon
        icon={faStarHalfAlt}
        className="text-lg text-yellow-200 lg:text-2xl"
        key={`stars${i}`}
      />
    );

  return <div className="py-1">{stars}</div>;
};

export default Rating;
