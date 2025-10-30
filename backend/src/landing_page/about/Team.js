/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center ">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/images/Vikash_Images.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Vikash Kumar</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-3">
          <p>
            Vikash Kumar founded Investify in 2010 with a simple mission — to
            make investing smarter, transparent, and accessible for everyone.
            What started as a personal journey to overcome the hurdles he faced
            as a trader has today transformed into Investify, a platform
            redefining how India invests.
          </p>
          <p>
            As a member of SEBI’s Secondary Market Advisory Committee (SMAC) and
            Market Data Advisory Committee (MDAC), he continues to contribute to
            shaping the future of financial markets.
          </p>
          <p>
            When he’s not building Investify, you’ll probably find him on the
            basketball court — that’s his zen.
          </p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href="">Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
