import React from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Kapcsolat</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Teljes név</label>
          <input name="name" placeholder="Add meg a teljes neved..." type="text" />
          <label htmlFor="email">Email cím</label>
          <input name="email" placeholder="Add meg az email címed..." type="email" />
          <label htmlFor="message">Üzenet</label>
          <textarea
            rows="6"
            placeholder="Üzenet..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Üzenet küldése</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
