import React from "react";
import { Container, Row, Col, Card, ListGroup ,Button} from "react-bootstrap";
import {UserHeaders}    from '../components/UserHeader';
 
const Gigs = () => {
  return (
    <div>
      <UserHeaders />
      <Container>
        <Row>
          <Col xs sm={9}>
            <h5 className="font">Gigs</h5>
          </Col>
          <Col>
            <a href="/create-gigs">
              <Button variant="success" className="creatgig">
                Create A New Gig
              </Button>
            </a>
          </Col>
        </Row>
        <Card>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <Row>
                <Col sm="4">
                  <b>GiG </b>
                </Col>
                <Col sm="2">
                  <b>IMPRESSIONS	</b>
                </Col >
                <Col sm="2">
                  <b>CLICKS</b>
                </Col>
                <Col sm="2">
                  <b>ORDERS	</b>
                </Col>
                <Col sm="2">
                  <b>CANCELLATIONS	</b>
                </Col>
              </Row>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        <div>
          <ListGroup.Item>
            <Row>
                <Col sm="1">
                    <img width="30px" height="30px" src="/images/Fiverr_logo.svg.png" alt="user" />
                    </Col>
                    <Col sm="3">Title</Col>
                    <Col sm="2">0</Col>
                    <Col sm="2">0</Col>
                    <Col sm="2">0</Col>
                    <Col sm="2">0</Col>

            </Row> 
          </ListGroup.Item>
        </div>
      </Container>
    </div>
  );
};

export default Gigs;
