import React from "react";
import "../Assets/Styles.css"; // Make sure to define your styles in this file

const Testimonial = () => {
  return (
    <section className="testimonials bg-dark">
      <div className="container">
        <h3 className="testimonials-heading text-lg">
          Don't just take our word for it, see the success stories from
          businesses just like yours.
        </h3>
        <div className="testimonials-grid">
          <div className="card">
            <p>
              “Our business has seen a significant increase in productivity
              since we started using the Growth app.”
            </p>
            <p>Katherine Smith</p>
            <p>Capodopera</p>
          </div>

          <div className="card">
            <p>
              “As a small business owner, it's important to have a tool that can
              help me keep track of everything.”
            </p>
            <p>Johnathan Lee</p>
            <p>Red Bolt</p>
          </div>

          <div className="card">
            <p>
              “The dashboards and reporting feature has provided valuable
              insights into our performance and helped us make data-driven
              decisions. It's a game changer for us.”
            </p>
            <p>David Wilson</p>
            <p>Slide</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
