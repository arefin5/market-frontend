import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Userdetails = () => {
  return (
    <div className="userdetail">
      <div className="userinfo">
        <Container>
          <Row>
            <Col xh lg={3}>
              <img
                width="60px"
                height="60px"
                src="/images/Fiverr_logo.svg.png"
                alt="user"
              />
            </Col>
            <Col xh lg={6}>
              <h5>Arefin</h5>
            </Col>
            <Col xh lg={3}>
              <FontAwesomeIcon
                icon={faStar}
                size="1x"
                color="#FFC100"
              ></FontAwesomeIcon>
              N/A
            </Col>
          </Row>
          <br />
          <div className="">
            <Row>
              <Col  lg={10}>Responce Rate</Col>
              <Col  lg={2}>100%</Col>
            </Row>
            {/*  */}
            <Row>
              <Col  lg={10}>Inbox Responce Time</Col>
              <Col  lg={2}>N/A</Col>
            </Row>
            {/*  */}
            <Row>
              <Col  lg={10}>Delivered on time</Col>
              <Col  lg={2}>100%</Col>
            </Row>
            {/*  */}
            <Row>
              <Col  lg={10}>Order completion</Col>
              <Col  lg={2}>100%</Col>
            </Row>
            {/*  */}
            <hr  />
            <Row>
              <Col  lg={10}>Earned In August</Col>
              <Col  lg={2}>20$</Col>
            </Row>
            {/*  */}
            <Row>
              <Col  lg={3}></Col>
              <Col  lg={3}></Col>
            </Row>
            {/*  */}
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Userdetails;
