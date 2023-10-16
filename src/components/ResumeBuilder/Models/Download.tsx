import React from "react";

export default function Download() {
  return (
    <div
      className="modal fade"
      id="paymentModal"
      tabIndex={-1}
      aria-labelledby="paymentModal"
      aria-hidden="true"
    >
      <div className="modal-dialog payment-modal-dialog">
        <div className="modal-content payment-modal-content">
          <div className="modal-body payment-modal-body">
            <button
              type="button"
              className="btn-close payment-modal-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            <h2 className="payment-modal-title">
              Choose a <span>payment method</span>
            </h2>
            <h2 className="payment-modal-price">$1.84</h2>
            <a
              href="#"
              className="btn btn-success w-100 payment-modal-btn"
              data-bs-dismiss="modal"
              data-bs-toggle="modal"
              data-bs-target="#pycardModal"
            >
              Pay by Card
              <img
                src="assets/image/right_arrow.png"
                alt=""
                className="img-fluid"
              />
            </a>
            <div className="payment-modal-imgs">
              <img src="assets/image/swish.png" alt="" className="img-fluid" />
              <img
                src="assets/image/shopping.png"
                alt=""
                className="img-fluid"
              />
            </div>
            <div className="payment-modal-discription">
              <small>
                Justo quis dui, lorem sit amet velit pharetra, magnis. Augue
                justo ullamcorper turpis eros, tincidunt aenean odio. Ultrices
                integer
              </small>
              <p>
                Justo quis dui, lorem sit amet velit pharetra, magnis. Augue
                justo ullamcorper turpis eros, tincidunt aenean odio. Ultrices
                integer pulvinar nisi eget dictumst mauris,
              </p>
            </div>
          </div>
          <div className="modal-footer payment-modal-footer">
            <a href="#" className="payment-modal-policy">
              Terms & Condition <span>|</span>{" "}
            </a>
            <a href="#" className="payment-modal-policy">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
