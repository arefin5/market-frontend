import React from "react";
import {
  Button,
  Form,
  Card,
  Col,
  Container,
  Row,
  Table,
} from "react-bootstrap";
import { UserHeaders } from "../components/UserHeader";

const CreateGig2 = () => {
  return (
    <div>
      <UserHeaders />
      <Container>
        <Form>
          <div className="gig2">
            <h3>Scrope & Pricing </h3>
            <div className="gig2line"></div>
            <h5>Pakeges</h5>
            <Table bordered>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Basic</th>
                  <th>Stenderds</th>
                  <th>Premium</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <Form.Control as="textarea" placeholder="h" row={2} />
                  </td>

                  <td>
                    <Form.Control as="textarea" row={2} />
                  </td>

                  <td>
                    <Form.Control as="textarea" row={2} />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Form.Control as="textarea" row={2} />
                  </td>
                  <td>
                    <Form.Control as="textarea" row={2} />
                  </td>
                  <td>
                    <Form.Control as="textarea" row={2} />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>a</option>
                      <option>b</option>
                      <option>c</option>
                      <option>d</option>
                    </Form.Control>
                  </td>
                </tr>
                <tr>
                  <td>Number of Pages</td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td>Number of Product </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                </tr>
                {/*  */}
                <tr className="hkl">
                  <td>Design Customization</td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox1" />
                  </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox2" />
                  </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox3" />
                  </td>
                </tr>
                {/*  */}
                {/*  */}
                <tr className="hkl">
                  <td>Responcive Design </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox4" />
                  </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox5" />
                  </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox6" />
                  </td>
                </tr>
                {/*  */}
                <tr className="hkl">
                  <td>Content Upload</td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox7" />{" "}
                  </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox8" />{" "}
                  </td>
                  <td>
                    <Form.Check custom type="checkbox" id="checkbox9" />{" "}
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td>Revisions </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                  <td>
                    <Form.Control as="select">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                    </Form.Control>
                  </td>
                </tr>
                {/*  */}
                <tr className="hkl">
                  <td>Price :</td>
                  <td>
                    <input type="number" step="5" min="5" max="100000" />$
                  </td>
                  <td>
                    <input type="number" step="5" min="5" max="100000" />$
                  </td>
                  <td>
                    <input type="number" step="5" min="5" max="100000" />$
                  </td>
                </tr>
                {/*  */}
                <tr>
                  <td colSpan="4">
                    <Form.Group controlId="image">
                      {/* <Form.Control
                        type="text"
                        placeholder="dsa"
                      ></Form.Control> */}
                      {/* <Form.File id="image-file" label="Choose file" custom /> */}
                    </Form.Group>
                  </td>
                </tr>
                {/*  */}
              </tbody>
            </Table>
            <Row>
              <Col sm="10">
                <Button variant="success" type="reset">
                  Cancell
                </Button>
              </Col>
              <Col>
                <Button variant="success" type="submit">
                  Save
                </Button>
              </Col>
            </Row>
            <br />
            <br />
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default CreateGig2;
