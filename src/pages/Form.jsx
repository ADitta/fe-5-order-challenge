import { Link } from "react-router-dom";
import star from "../images/icon-star.svg";
const Form = ({ setRating, rating }) => {
  return (
    <div className="feedback-container">
      <div className="star-container">
        <img src={star} alt="" />
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-container">
        <button
          onClick={() => setRating(1)}
          className={`rating-btn ${rating === 1 ? "selected-rating" : ""}`}
        >
          1
        </button>
        <button
          onClick={() => setRating(2)}
          className={`rating-btn ${rating === 2 ? "selected-rating" : ""}`}
        >
          2
        </button>
        <button
          onClick={() => setRating(3)}
          className={`rating-btn ${rating === 3 ? "selected-rating" : ""}`}
        >
          3
        </button>
        <button
          onClick={() => setRating(4)}
          className={`rating-btn ${rating === 4 ? "selected-rating" : ""}`}
        >
          4
        </button>
        <button
          onClick={() => setRating(5)}
          className={`rating-btn ${rating === 5 ? "selected-rating" : ""}`}
        >
          5
        </button>
      </div>
      <Link to={"/submitted"}>
        <button className="submit-btn">SUBMIT</button>
      </Link>
    </div>
  );
};

export default Form;
