import React, { useState } from "react";
import { Table, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  const renderEquity = () => (
    <div className="mt-4 container " style={{ textAlign: "left" }}>
      <div className="row border-bottom text-center">
        <Table bordered hover responsive className="align-middle">
          <thead className="table-light text-center">
            <tr>
              <th></th>
              <th>Equity delivery</th>
              <th>Equity intraday</th>
              <th>F&amp;O - Futures</th>
              <th>F&amp;O - Options</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Brokerage</strong>
              </td>
              <td>Zero Brokerage</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>0.03% or Rs. 20/executed order whichever is lower</td>
              <td>Flat Rs. 20 per executed order</td>
            </tr>
            <tr>
              <td>
                <strong>STT/CTT</strong>
              </td>
              <td>0.1% on buy &amp; sell</td>
              <td>0.025% on the sell side</td>
              <td>0.02% on the sell side</td>
              <td>
                <ul className="text-start m-0">
                  <li>
                    0.125% of the intrinsic value on options that are bought and
                    exercised
                  </li>
                  <li>0.1% on sell side (on premium)</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>
                <strong>Transaction charges</strong>
              </td>
              <td>
                NSE: 0.00297% <br /> BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00297% <br /> BSE: 0.00375%
              </td>
              <td>
                NSE: 0.00173% <br /> BSE: 0
              </td>
              <td>
                NSE: 0.03503% (on premium) <br /> BSE: 0.0325% (on premium)
              </td>
            </tr>
            <tr>
              <td>
                <strong>GST</strong>
              </td>
              <td colSpan="4">
                18% on (brokerage + SEBI charges + transaction charges)
              </td>
            </tr>
            <tr>
              <td>
                <strong>SEBI charges</strong>
              </td>
              <td colSpan="4">₹10 / crore</td>
            </tr>
            <tr>
              <td>
                <strong>Stamp charges</strong>
              </td>
              <td>0.015% or ₹1500 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
              <td>0.002% or ₹200 / crore on buy side</td>
              <td>0.003% or ₹300 / crore on buy side</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );

  const renderCurrency = () => (
    <div className="mt-5 text-center border-bottom">
      <h2 className="fw-bold text-primary mb-3">Currency Brokerage Charges</h2>
      <h5>Currency charges table coming soon...</h5>
    </div>
  );

  const renderCommodity = () => (
    <div className="mt-5 text-center">
      <h2 className="fw-bold text-primary mb-3">Commodity Brokerage Charges</h2>
      <h5>Commodity charges table coming soon...</h5>
    </div>
  );

  return (
    <div className="container my-4 ">
      <Nav defaultActiveKey="equity">
        <Nav.Item>
          <Nav.Link
            eventKey="equity"
            active={activeTab === "equity"}
            onClick={() => setActiveTab("equity")}
          >
            <h5 className="m-0 text-black">Equity</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="currency"
            active={activeTab === "currency"}
            onClick={() => setActiveTab("currency")}
          >
            <h5 className="m-0 text-black">Currency</h5>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            eventKey="commodity"
            active={activeTab === "commodity"}
            onClick={() => setActiveTab("commodity")}
          >
            <h5 className="m-0 text-black">Commodity</h5>
          </Nav.Link>
        </Nav.Item>
      </Nav>

      {activeTab === "equity" && renderEquity()}
      {activeTab === "currency" && renderCurrency()}
      {activeTab === "commodity" && renderCommodity()}
    </div>
  );
}

export default Brokerage;
