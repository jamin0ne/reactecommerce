import React from "react";
import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";
export default function AboutUsPage() {
  return (
    <div>
      <h2>About us</h2>
      <p>
        We are steady supplier of Afro carabbiean food items and spices. We are
        based in sofia, bulgaria our working hours are form monday - saturday
        10:00 - 17:00. We deleiver to all over bulgaria but delivery to time
        differs depending on location, delivery within sofia takes 0-2 business
        days, delivery outside sofia takes 2-5 business days.for order
        confrimation, correction or cancellation please send us an email at
        *****@example.com with the name on the order and the order reference
        number and it will be updated accordingly
      </p>
      <div>
        To see list of our products
        <Button as={Link} to="/Productspage" color="blue">
          Click Me
        </Button>
      </div>
    </div>
  );
}
