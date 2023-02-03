import React from 'react'

const PriceTable = () => {
  return (
    <div className="price-table h-screen ">
      <div className="demo10">
        <div className="container">
          <h4 className="py-4 text-center">Pricing Table</h4>
          <div className="grid-cols-3 ">
 
            
            <div className="">
              <div className="pricingTable10">
                <div className="pricingTable-header">
                  <h3 className="heading">Premium</h3>
                  <span className="price-value">
                    <span className="currency">$</span> 30
                    <span className="month">/mo</span>
                  </span>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>70GB Disk Space</li>
                    <li>70 Email Accounts</li>
                    <li>70GB Monthly Bandwidth</li>
                    <li>20 Subdomains</li>
                    <li>25 Domains</li>
                  </ul>
                  <a href="#" className="read">
                    sign up
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="pricingTable10">
                <div className="pricingTable-header">
                  <h3 className="heading">Premium</h3>
                  <span className="price-value">
                    <span className="currency">$</span> 30
                    <span className="month">/mo</span>
                  </span>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>70GB Disk Space</li>
                    <li>70 Email Accounts</li>
                    <li>70GB Monthly Bandwidth</li>
                    <li>20 Subdomains</li>
                    <li>25 Domains</li>
                  </ul>
                  <a href="#" className="read">
                    sign up
                  </a>
                </div>
              </div>
            </div>
            <div className="">
              <div className="pricingTable10">
                <div className="pricingTable-header">
                  <h3 className="heading">Premium</h3>
                  <span className="price-value">
                    <span className="currency">$</span> 30
                    <span className="month">/mo</span>
                  </span>
                </div>
                <div className="pricing-content">
                  <ul>
                    <li>70GB Disk Space</li>
                    <li>70 Email Accounts</li>
                    <li>70GB Monthly Bandwidth</li>
                    <li>20 Subdomains</li>
                    <li>25 Domains</li>
                  </ul>
                  <a href="#" className="read">
                    sign up
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceTable