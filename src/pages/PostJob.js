import React from "react";
import { Button, Form, Col, Container, Row } from "react-bootstrap";
import BuyerHeader from "./BuyerHeader";

const PostJob = () => {
  return (
    <div>
      <BuyerHeader />
      <Container>
        <Form>
          <br />
          <h3>What Service You Are Looking For ?</h3>
          <Row>
            <Col sm={8}>
              <h6>
                Describe the service you're looking to purchase - please bo as
                detailed as possible:
              </h6>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="i am looking for "
              ></Form.Control>
            </Col>
          </Row>
          <br />
          <h3>Chose a catagories :</h3>
          <Row>
            <Col sm={4}>
              <Form.Group as={Col}>
                <Form.Control as="select">
                  <option>Choose</option>
                  <option>Programing</option>
                  <option>Digital marketing </option>
                  <option>Seo</option>
                </Form.Control>
              </Form.Group>
            </Col>
            {/* sub cetagories */}
            <Col sm={4}>
              <Form.Group as={Col}>
                <Form.Control as="select">
                  <option>Advance</option>
                  <option>Morderte</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <br />
          <h6>
            Once you place your order, when would you like your service
            delivered?{" "}
          </h6>
          <Row>
            <Col>
              <input type="number" step="2" min="1" max="100000" />$
            </Col>
          </Row>
          <br />
          <h6>Whats Your Buget For This Service  ? </h6>
          <Row>
            <Col sm={7}>
              <input type="number" step="2" min="1" max="100000" />$
            </Col>
            <Col sm={3}>
                <Button variant="success" type="submit">
                    Post
                </Button>
            </Col>
          </Row>
          <br />
        </Form>
      </Container>
    </div>
  );
};
export default PostJob;
