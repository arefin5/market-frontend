import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import { Autocomplete } from "@material-ui/lab";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { UserHeaders } from "../components/UserHeader";

const Creategigs = () => {
const useStyles = makeStyles((theme) => ({
  root: {
    '&>*+*':{
      margin: theme.spacing(9),
    },
  },
}));



  return (
    <div className="mainnnnn">
      <UserHeaders />
      <div className="create-gigs">
        <Form>
          <Container>
            <Card style={{ width: "45rem" }}>
              <Card.Body>
                <Row>
                  <Col sm="3">GIG TITLE</Col>
                  <Col className="bnn" sm="9">
                    <Form.Control type="text" placeholder="I Will Do" />
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">Category</Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Chose</option>
                        <option>Programing</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  {/*  */}
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Advance</option>
                        <option>Mortal</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Row>
                {/*  */}
                <Row>
                  <Col sm="3">Service Type</Col>
                  <Col className="bnm">
                    <Form.Group as={Col}>
                      <Form.Control as="select">
                        <option>Full- WebSite Creation</option>
                        <option>WebSite Development</option>
                        <option>WebSite Maintenance</option>
                        <option>WebSite Customizetion </option>
                        <option>Bug Fix</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col></Col>
                </Row>
                <Row>
                  <Col sm="3">GIG META DATA </Col>
                  <Col sm="9" className="bnm">
                    <div className="torowborder">
                      <Row>
                        <Col className="borderrow" sm="3">
                          PLATFORM
                        </Col>
                        <Col sm="9">
                          SELECT THE PLATFORM for which you providing service
                        </Col>
                      </Row>
                      <Row>
                        <Col sm="3" className="borderonerow"></Col>
                        <Col className="radiobtn">
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="javascript"
                              />
                              <label htmlFor="radio1">Javascript</label>
                              {/*  */}
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="react"
                              />
                              <label htmlFor="radio1">React</label>
                            </Col>
                          </Row>
                          <br />
                          {/*  */}
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="NODEJS"
                              />
                              <label htmlFor="radio1">Node js</label>
                              {/*  */}
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="PHP"
                              />
                              <label htmlFor="radio1">PHP</label>
                            </Col>
                          </Row>
                          <br />
                          {/*  */}
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="ANGULAR"
                              />
                              <label htmlFor="radio1">Agular</label>
                              {/*  */}
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="Phyton"
                              />
                              <label htmlFor="radio1">Phython</label>
                            </Col>
                          </Row>
                          <br />
                          {/*  */}
                          <Row>
                            <Col>
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="C++"
                              />
                              <label htmlFor="radio1">C++</label>
                              {/*  */}
                              <input
                                type="radio"
                                name="radio"
                                id="other"
                                value="Mern"
                              />
                              <label htmlFor="radio1">Mern</label>
                            </Col>
                          </Row>
                          <br />
                          {/*  */}
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col sm="3">SEARCH TAG</Col>
                  <Col className="bnm">
                
                    {/* <Autocomplete
                      multiple
                      id="tags-filled"
                      option={top10.map((option) => option.title)}
                      freesolo
                      renderTags={(value, getTagProps) =>
                        value.map((option, index) => (
                          <Chip
                            variant="outlined"
                            label={option}
                            {...getTagProps({ index })}
                          />
                        ))
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          variant="filled"
                          placeholder="Favorites"
                        />
                      )}
                    /> */}
                  </Col>
                </Row>
              </Card.Body>
            </Card>
            <Row> 
              <Col sm="7">
                <Button variant="success" type="submit">Cancell
                </Button>
              </Col>
              <Col sm="3">
                <Button variant="primary" type="submit">Save
                </Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </div>
    </div>
  );
  const top10 = [
    { title: "Javascript",year: "1994" },
    { title: "React", year: "1995" },
    { title: "Node js", year: "1996" },
    { title: "Phyton" ,year: "1997" },
    { title: "C++", year: "1998" },
  ];

};

export default Creategigs;
//
