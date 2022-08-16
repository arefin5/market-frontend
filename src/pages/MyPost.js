import React from "react";
import {
  Button,
  Form,
  Col,
  Container,
  Row,
  Card,
  ListGroup,
} from "react-bootstrap";
import BuyerHeader from "./BuyerHeader";
const MyPost = () => {
  return (
    <div>
      <BuyerHeader />
      <Container>
        <br />
        <Card>
          <ListGroup>
            <ListGroup.Item>
              <h6>ACTIVE JOB POST</h6>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                <Col sm="2">
                  <b>Date:</b>{" "}
                </Col>
                <Col sm="4">
                  <b>REQUEST </b>{" "}
                </Col>
                <Col sm="2">
                  <b>DURATION</b>{" "}
                </Col>
                <Col sm="2">
                  <b>BUGET</b>{" "}
                </Col>
                <Col sm="2">
                  <b>RECEIVED REQUEST</b>{" "}
                </Col>
              </Row>
            </ListGroup.Item>
            <div>
              <ListGroup.Item>
                <Row>
                  <Col sm="2">Feb,2,2022</Col>
                  <Col sm="4">Title</Col>
                  <Col sm="2">Days</Col>
                  <Col sm="2">Price</Col>
                  <Col sm="2">num of received request</Col>
                  </Row>
              </ListGroup.Item>
            </div>
          </ListGroup>
        </Card>
      </Container>
    </div>
  );
};

export default MyPost;
