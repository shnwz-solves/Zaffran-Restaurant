  import React from "react";
  import "./footer.css";
  import {NavLink} from 'react-router-dom';
  const Footer = () => {
    

    return (
      <>
      

      <footer className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <h5>Zaffran</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="" className="nav-link p-0 text-muted">
                    Features
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Pricing
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    FAQs
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    About
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <h5>Delicious  Food</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Our Menu
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Special Menu
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Snacks Menu
                                      </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Book a Table
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Rating and reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mb-3">
              <h5>For Business Querry</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    contact@zaffranIndia@gmail.com
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    +91 9064xxxx45
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    +91 7893XXXX97
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Carriers
                  </NavLink>
                </li>
                <li className="nav-item mb-2">
                  <NavLink to="#" className="nav-link p-0 text-muted">
                    Show location on map
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-5 mb-3 ">
              <form>
                <h5>Subscribe to our newsletter</h5>
                <p>Monthly digest of what's new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className="btn btn-warning" type="button">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="row">
            <div className="col-12  justify-content-between align-items-center py-4  border-top text-center">
              <p>© 2022 Company, Inc. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <NavLink className="link-dark" to="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkto="#twitter" />
                    </svg>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-dark" to="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkto="#instagram" />
                    </svg>
                  </NavLink>
                </li>
                <li className="ms-3">
                  <NavLink className="link-dark" to="#">
                    <svg className="bi" width={24} height={24}>
                      <use xlinkto="#facebook" />
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          
        </div>
      </footer>
      </>
    );
  };

  export default Footer;
