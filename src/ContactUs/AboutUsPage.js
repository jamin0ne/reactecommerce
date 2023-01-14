import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
export default function AboutUsPage() {
  return (
    <div>
      <h2>About us</h2>
      <p>
      We are steady a supplier of Afro Caribbean food items and spices. We are
        based in Sofia, Bulgaria. Our working hours are form Monday - Saturday
        10:00 - 17:00. We deliver to all over Bulgaria but delivery to time
        differs depending on location, delivery within Sofia takes 0-2 business
        days, delivery outside Sofia takes 2-5 business days. For order
        confirmation, correction or cancellation please send us an email at
        *****@example.com with the name on the order and the order reference
        number and it will be updated accordingly.
      </p>
      <div>
        To see list of our products
        <Button as={Link} to="/Productspage" color="teal">
          Click Me
        </Button>
      </div>
    </div>
  );
}
