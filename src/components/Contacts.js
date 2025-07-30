import React from 'react';
import './Contacts.css';
import { Element } from 'react-scroll';

const Contacts = () => {
  return (
    <Element name="contacts">
      <section className="contacts-section">
        <div className="contacts-container">

          {/* LEFT FORM */}
          <div className="contact-form">
            <h2>Get in Touch</h2>
            <form action="https://formspree.io/f/xeozkdkw" method="POST">
              <input type="hidden" name="_captcha" value="false" />
              
              <label>Name</label>
              <input type="text" placeholder="Required" />

              <label>Email</label>
              <input type="email" placeholder="Optional" />

              <div className="form-row">
                <div className="form-group">
                  <label>Mobile No.</label>
                  <input type="tel" placeholder="Required" />
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" placeholder="Required" />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Event Type</label>
                  <input type="text" placeholder="Required" />
                </div>
                <div className="form-group">
                  <label>Event Date</label>
                  <input type="date" />
                </div>
              </div>

              <label>Message</label>
              <textarea rows="4" placeholder="Optional"></textarea>

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* RIGHT INFO */}
          <div className="contact-info">
            <h2>Contacts</h2>
            <ul>
              <li><i className="fas fa-phone-alt"></i> +63 994 2484 704</li>
              <li><i className="fas fa-envelope"></i> rodylynrobles19@gmail.com</li>
              <li><i className="fas fa-map-marker-alt"></i> City of Dasmariñas, Cavite</li>
              <li><i className="fab fa-facebook"></i> facebook.com/glambyrr</li>
              <li><i className="fab fa-instagram"></i> @glambyrr</li>
            </ul>
            <img
              src="/images/makeup-brushes.jpg"
              alt="Makeup and brushes"
              className="bottom-img"
            />
          </div>

        </div>
      </section>
    </Element>
  );
};

export default Contacts;
