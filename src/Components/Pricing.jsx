import React from "react";
import "../Assets/Styles.css"; // Make sure to define your styles in this file
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const pricingPackages = [
  {
    title: "Basic Membership",
    monthlyFee: "$29.99",
    access: [
      "Unlimited access to the gym during regular hours",
      "Use of cardio equipment and free weights",
    ],
    groupFitnessClasses: "Not included",
    personalTrainingSessions: "Not included",
    lockerRental: "Not included",
    signUpFee: "$0",
    contractLength: "Month-to-month",
  },
  {
    title: "Premium Membership",
    monthlyFee: "$49.99",
    access: [
      "Unlimited access to the gym during regular and extended hours",
      "Use of all gym facilities, including cardio equipment, free weights, and sauna",
    ],
    groupFitnessClasses: "Included (unlimited classes)",
    personalTrainingSessions: "2 sessions per month",
    lockerRental: "Included",
    signUpFee: "$49.99 (one-time fee)",
    contractLength: "12 months",
  },
];

const Pricing = () => {
  return (
    <section className="pricing">
      <div className="container-sm">
        <h3 className="pricing-heading text-xl text-center">Pricing</h3>
        <p className="pricing-subheading text-md text-center">
          Start free and scale while you grow. No hidden fees. Unlimited users
          for free.
        </p>
        <div className="pricing-grid">
          {pricingPackages.map((pricing, index) => (
            <div
              className={`card ${index % 2 === 0 ? "bg-black" : "bg-dark"}`}
              key={index}
            >
              <div className="pricing-card-header">
                <h4 className="pricing-heading text-xl">{pricing.title}</h4>
                <p className="pricing-card-subheading">
                  {pricing.access.map((accessItem, i) => (
                    <span key={i}>
                      {accessItem}
                      <br />
                    </span>
                  ))}
                </p>
                <p className="pricing-card-price">
                  <span className="text-xl">{pricing.monthlyFee}</span>
                  {pricing.signUpFee && <span> /month</span>}
                </p>
              </div>
              <div className="pricing-card-body">
                {pricing.groupFitnessClasses !== "Not included" && (
                  <p>Group Fitness Classes: {pricing.groupFitnessClasses}</p>
                )}
                {pricing.personalTrainingSessions !== "Not included" && (
                  <p>
                    Personal Training Sessions:{" "}
                    {pricing.personalTrainingSessions}
                  </p>
                )}
                {pricing.lockerRental !== "Not included" && (
                  <p>Locker Rental: {pricing.lockerRental}</p>
                )}
                <p>Sign-up Fee: {pricing.signUpFee}</p>
                <p>Contract Length: {pricing.contractLength}</p>
                <ul>
                  {pricing.access.map((accessItem, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={faCheck} /> {accessItem}
                    </li>
                  ))}
                </ul>
                <Link to="/get-started" className="btn btn-primary btn-block">
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>
        <p className="pricing-footer text-center">
          All prices are in USD and charged per month with applicable taxes
          added at checkout.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
