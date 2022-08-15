import { Button, Form, Card, Col, Container, Row } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import {Autocomplete} from '@material-ui/lab';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import {UserHeaders}    from '../components/UserHeader';

const Creategigs = () => {
  return (
    <div className="mnnnn">
      <UserHeaders />
      <div className="create-gigs">
        <Form>
          <Container>
            <Card style={{ width: "45rem" }}>
               <Card.Body>
                <Row className="bn">
                  <Col sm="3">GIG TITLE</Col>

                </Row>
              </Card.Body>
            </Card>
          </Container>
        </Form>
      </div>
    </div>
  );
};

export default Creategigs;
