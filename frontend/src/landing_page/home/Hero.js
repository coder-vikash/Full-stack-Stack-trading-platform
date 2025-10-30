import React from "react";

function Home() {
  return (
    <div className="container p-5 text-center">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <img
            src="media/Images/homeHero.png"
            alt="Home hero"
            className="img-fluid mb-5"
          />
          <h1 className="fw-bold">Invest in everything</h1>
          <p className="mt-4 ">
            Online platform to invest in stocks, derivatives, mutual funds,
            ETFs, bonds, and more. Sign up for free.
          </p>
          <button
            className="btn btn-primary mt-3 px-4 py-2 fs-5"
            style={{ fontSize: "20px" }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
