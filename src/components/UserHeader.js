import { Row, Col, NavDropdown } from "react-bootstrap";
 import  { LinkContainer } from 'react-router-bootstrap';


export const UserHeaders = () => {
  return (
    <div className="userMenu">
      <Row>
        <Col sm="9">
          <ul>
            <li>
              <a href="/">
                <img
                  width="90px"
                  hight="90px"
                  alt="logo"
                  src="/images/Fiverr_logo.svg.png"
                />
              </a>
            </li>

            <li>
              <a href="/user">Dashbord</a>
            </li>
            <li>
              <a href="//">Messages</a>
            </li>
            <li>
              <a href="/">Order</a>
            </li>
            <li>
              <a href="/">Gigs</a>
            </li>
            <li>
              <a href="/">Analytics</a>
            </li>
            <li>
              <a href="/">Earnings</a>
            </li>
            <li>
              <a href="/">Community</a>
            </li>
            <li>
              <a href="/buyer-requests">Buyer Requests</a>
            </li>
          </ul>
        </Col>
        {/*  */}
        <Col sm="3">
            <ul>
                <li>
                    <a href="/">
                        Switch to Buyer
                    </a>
                </li>
                <li>
              <a href="/user/header">
                <img
                  width="30px"
                  hight="30px"
                  alt="logo"
                  src="/images/Fiverr_logo.svg.png"
                />
              </a>
            </li>
            <NavDropdown title="" id="username">

             <LinkContainer to="/PROFILE">
             <NavDropdown.Item >Profile</NavDropdown.Item>
                </LinkContainer>
                    <LinkContainer to="/">
                    <NavDropdown.Item >Logout</NavDropdown.Item>
                        </LinkContainer>
            </NavDropdown>

                      </ul>
            </Col>
      </Row>
    </div>
  );
};
