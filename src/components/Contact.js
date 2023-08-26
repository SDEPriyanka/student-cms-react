import React from "react";

export const Contact = () => {
  return (
    <div className="Contact-wrapper">
      <div className="Contact">
        <div className="contact-desc row">
          <div className="left-content col-md-6">
            <div className="left-content-heading">
              <p>GET IN TOUCH</p>

              <h2>Feel free to contact us</h2>

              <p>
                Start working with Us, We guarantee that you’ll be able to have
                any issue resolved within 24 hours.
              </p>
            </div>
            <div className="adderss">
              <ul>
                <li>
                  <i class="fa fa-map-marker" aria-hidden="true"></i>
                  <h6>
                    <b>Our head office address</b>
                  </h6>
                  Address here, 208 Trainer Avenue street, Illinois, UK - 62617.
                </li>
                <li>
                  <i class="fa fa-phone" aria-hidden="true"></i>
                  <h6>
                    <b>Call for help</b>
                  </h6>
                  +(21) 255 999 8888
                </li>
                <li>
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  <h6>
                    <b>Contact with our support</b>
                  </h6>
                  coursing@mail.com
                </li>
              </ul>
            </div>
          </div>
          <div className="right-content col-md-6">
            <h2>Contact Form</h2>
            <form id="contact_form" name="contact_form" method="post">
              <div class="mb-5 row">
                <div class="col">
                  <label>First Name</label>
                  <input
                    type="text"
                    required
                    maxlength="50"
                    class="form-control"
                    id="first_name"
                    name="first_name"
                  ></input>
                </div>
                <div class="col">
                  <label>Last Name</label>
                  <input
                    type="text"
                    required
                    maxlength="50"
                    class="form-control"
                    id="last_name"
                    name="last_name"
                  ></input>
                </div>
              </div>
              <div class="mb-5 row">
                <div class="col">
                  <label for="email_addr">Email address</label>
                  <input
                    type="email"
                    required
                    maxlength="50"
                    class="form-control"
                    id="email_addr"
                    name="email"
                    placeholder="name@example.com"
                  ></input>
                </div>
                <div class="col">
                  <label for="phone_input">Phone</label>
                  <input
                    type="tel"
                    required
                    maxlength="50"
                    class="form-control"
                    id="phone_input"
                    name="Phone"
                    placeholder="Phone"
                  ></input>
                </div>
              </div>
              <div class="mb-5">
                <label for="message">Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="5"
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary ">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
