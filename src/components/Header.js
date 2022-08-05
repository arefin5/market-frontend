import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import Slider from "./Slider"; 
const Header = () => {
  const [navbar, setNavbar] = useState();

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  //
  window.addEventListener("scroll", changeBackground);
  return (
    <div >
      <div  className={navbar ? "nn active " : "nn"}>
        <Row className="containerh ">
          <Col className="col1">
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              color={navbar ? "white" : "black"}
              id="baricon"
            />
            <div className={navbar ? "deactive" : "logo"}>
              <img
                alt="logo"
                className="logoimg"
                src="/images/Fiverr_logo.svg.png"
              />
              {/* <div className="dot">

            </div> */}
            </div>
            <div className="nm">{/*  */}</div>

            <div>
              <img
                alt="black-logo"
                className="blacklogo searchbarhide"
                src="/images/Fiverr_logo.svg.png"
              />
            </div>
            {/* <div className={navbar ?'searchBar':'searchbarhide'} > */}
            <div className="searchBar">
              <Form className="d-flex">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <Button className="btn btn-outline-success" type="submit">
                  Search
                </Button>
              </Form>
            </div>
          </Col>
          <ul className="nvegation">
            <li className="11">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                {" "}
                Fiverr Business
              </a>{" "}
            </li>
            <li className="sli">
              {" "}
              <a  className={navbar ? "linkcolor" : "disactivecolor"} href="/"> Explore</a>
            </li>
            <li className="sli">
              {" "}
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                <span className="global">global</span>
              </a>
            </li>
            <li className="tli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">RSPKR</a>{" "}
            </li>
            <li className="tli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">Become a Seller</a>{" "}
            </li>
            <li>
            <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">Sing in</a>{" "}

               </li>
            <li className="bli">
              {" "}
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/join">
                <Button variant="outline-success mt-1">Join</Button> {""}{" "}
              </a>{" "}
            </li>
          </ul>
        </Row>
       
      </div>
      <Slider />
    </div>
   
  );
};

export default Header;
