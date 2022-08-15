import React from "react";
import { Container, Row, Col,NavDropdown } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
const BuyerHeader = () => {
  return (
    <div className="userMenu">
      <Row>
        <Col sm="10">
          <ul>
            <li>
              <a href="/">
                <img
                  width="80px"
                  height="35px"
                  src="/images/Fiverr_logo.svg.png"
                  alt="buyerLogo"
                />
              </a>
            </li>
            <li>
              <a href="/">DashBoard</a>
            </li>
            <li>
              <a href="/">Messages</a>
            </li>
            <li>
              <a href="/">Orders</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">Comunity</a>
            </li>
            <li>
              <a href="/post-request">POST A REQUESTS</a>
            </li>
            <li>
              <a href="/mypost">MY JOb POST</a>
            </li>
          </ul>
        </Col>
        <Col sm="2">
          <ul>
            <li>
              <a href="/">
                <img src="/images/user.png" alt="user" />
              </a>
            </li>
            <NavDropdown title="" id="username">
              <LinkContainer to="/PROFILE">
                <NavDropdown.Item>Profile</NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to="/">
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </LinkContainer>
            </NavDropdown>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default BuyerHeader;
