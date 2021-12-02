//PaymentForm.js
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";

const PaymentForm = (props) => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!stripe || !elements) {
        return;
      }
      const cardElement = elements.getElement(CardElement);
      const { error, token } = await stripe.createToken(cardElement);

      if (!error) {
          console.log(token)
          axios.post("http://localhost:8000/api/charge", {
                token: token.id,
                currency: "SEK",
                price: props.price * 100, // or 10 pounds (10*100). Stripe charges with the smallest price unit allowed
          })
          .then((resp) => {
              alert("Din betalning är genomförd");
              console.log(resp.data)
              props.parentCallback(resp);
          })
          .catch((err) => {
              console.log(err);
          });
      } else {
        console.log(error);
      }
    };

    return (
      <form className="pay-form" onSubmit={handleSubmit}>
        <CardElement />
        <button className="pay-btn">Betala</button>
      </form>
    );
};

export default PaymentForm;
