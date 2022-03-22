import phone from "../images/illustration-thank-you.svg";

const ThankYou = ({ rating }) => {
  return (
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
  );
};

export default ThankYou;
