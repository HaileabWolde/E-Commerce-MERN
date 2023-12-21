import React from "react";
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const CheckoutStep = ({ step1, step2, step3, step4 }) => {
  return (
    <>
      <Nav className="justify-content-center mb-4">
        <Nav.Item>
          {step1 ? (
          
              <Nav.Link>
                <Link to="/signIn">SignIn</Link>
              </Nav.Link>
      
          ) : (
            <Nav.Link disabled>SignIn</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step2 ? (
            
              <Nav.Link>
                <Link to="/shipping">
                Shipping
                </Link>
               </Nav.Link>
          
          ) : (
            <Nav.Link disabled>Shipping</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step3 ? (
            
              <Nav.Link>
                <Link to="/payment">
                    Payment
                </Link>
              </Nav.Link>
            
          ) : (
            <Nav.Link disabled>Payment</Nav.Link>
          )}
        </Nav.Item>
        <Nav.Item>
          {step4 ? (
            <Link to="/placeorder">
              <Nav.Link>
                <Link to="/placeorder">
                    Place Order
                </Link>
              </Nav.Link>
            </Link>
          ) : (
            <Nav.Link disabled>Place Order</Nav.Link>
          )}
        </Nav.Item>
      </Nav>
    </>
  );
};

export default CheckoutStep;
