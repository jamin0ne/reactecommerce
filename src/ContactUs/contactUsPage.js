import React from "react";
import { Link } from "react-router-dom";
import "./contactUs.css"
export default function AboutUsPage() {
  return (
    <div>
      <img
            alt="image64926"
            src="public/playground_assets/image64926-p83s-200h.png"
            class="contact-us-image6"
          />
          <div class="contact-us-frame19">
            <div class="contact-us-frame10">
              <span class="contact-us-text10">
                <span>
                  <span>Working hours: Monday - Saturday 10:00 - 17:00.</span>
                  <br />
                  <span></span>
                  <br />
                  <span>
                    Our delivery service is available throughout Bulgaria.
                    Delivery times:
                  </span>
                  <br />
                  <span>Within Sofia: 0-2 business days</span>
                  <br />
                  <span>Outside Sofia: 2-5 business days</span>
                  <br />
                  <span></span>
                  <br />
                  <span>
                    For adjustment or cancellation of orders, please send us an
                    email at *****@example.com with your name and order
                    reference number included in the subject line, and we will
                    respond to you accordingly
                  </span>
                </span>
              </span>
              <div class="contact-us-frame7">
              <Link to="/ProductsPage"><span class="contact-us-text25">
                  <span>Check out our products</span>
                </span></Link>
              </div>
            </div>
          </div>
          <span class="contact-us-text27"><span>Contact Us</span></span>
    </div>
  );
}
