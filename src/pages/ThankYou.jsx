import phone from "../images/illustration-thank-you.svg";
import { Link } from "react-router-dom";
const ThankYou = ({ rating }) => {
  return (
    <>
      {rating ? (
        <div className=" thank-you-container">
          <img src={phone} alt="" />
          <div className="final-rating">
            <div className="rating-text">
              <h2>You selected {rating} out of 5</h2>
            </div>
          </div>
          <h1>Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need
            more support, don't hesistate to get in touch!
          </p>
        </div>
      ) : (
        <div className="error-content">
          <h1>Sorry there seemed to be an error</h1>
          <Link to="/">Click here to return back home</Link>
        </div>
      )}
    </>
  );
};

export default ThankYou;
