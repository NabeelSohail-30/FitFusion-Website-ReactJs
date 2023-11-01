import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles.css";

const FAQ = () => {
  return (
    <>
      <section className="faq bg-dark">
        <div className="container-sm">
          <h3 className="text-xl text-center">Frequently Asked Questions</h3>
          <ul className="faq-menu">
            <li className="active">All</li>
            <li>Getting Started</li>
            <li>Pricing</li>
          </ul>
          <div className="faq-content">
            <div className="faq-group">
              <div className="faq-group-header">
                <h4 className="text-md">
                  How does the contact management feature help me keep track of
                  clients and partners?
                </h4>
                <FontAwesomeIcon icon={faMinus} />
              </div>
              <div className="faq-group-body open">
                <p>
                  Keep track of your contacts, gain valuable insights, analyze
                  live data and performance metrics.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header">
                <h4 className="text-md">
                  Can I customize the dashboards and reporting feature to
                  display the metrics that are most important to my business?
                </h4>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="faq-group-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad
                  culpa enim blanditiis rem ipsum aliquam, unde iste fugit
                  praesentium eos?
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header">
                <h4 className="text-md">
                  How does the task management feature help me delegate tasks to
                  my team and track progress?
                </h4>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="faq-group-body">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Incidunt, a! Quaerat, voluptatum. Animi molestias ex quasi
                  explicabo minima perferendis commodi.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header">
                <h4 className="text-md">
                  Can I collaborate with my team in real-time using all tools?
                </h4>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="faq-group-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header">
                <h4 className="text-md">
                  Is the app available on all devices?
                </h4>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="faq-group-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </p>
              </div>
            </div>

            <div className="faq-group">
              <div className="faq-group-header">
                <h4 className="text-md">
                  How does the app help me stay compliant when working with
                  freelancers and contractors?
                </h4>
                <FontAwesomeIcon icon={faPlus} />
              </div>
              <div className="faq-group-body">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Obcaecati doloremque assumenda aut dolorem recusandae
                  quibusdam aliquid. Repellat animi quam vitae.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
