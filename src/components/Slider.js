import react from "react";
import Carousel from "react-bootstrap/Carousel";
import { From, FormControl } from "react-bootstrap";
import Chip from "@material-ui/core/Chip";
import { Form,Button} from 'react-bootstrap';
const Slider = () => {
  return (
    <div className=" slider">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/sl1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        {/*  */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/sl1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        {/*  */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/sl1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        {/*  */}
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="./images/sl1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        {/*  */}
      </Carousel>

      <div className="hn">
        <p>
          Find the perfect <i>Services for your Business</i>
        </p>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button className="btn" type="submit">
                  Search
                </Button>
        </Form>
        <div className="populer">
          Popular:
          <Chip
            className="Chip"
            variant="outlined"
            size="slamm"
            label="React"
            component="a"
            href="#chip"
            clickable
          ></Chip>
          <Chip
            className="Chip"
            variant="outlined"
            size="slamm"
            label="React"
            component="a"
            href="#chip"
            clickable
          ></Chip>
          <Chip
            className="Chip"
            variant="outlined"
            size="slamm"
            label="React"
            component="a"
            href="#chip"
            clickable
          ></Chip>
          <Chip
            className="Chip"
            variant="outlined"
            size="slamm"
            label="React"
            component="a"
            href="#chip"
            clickable
          ></Chip>
        </div>
      </div>
    </div>
  );
};
export default Slider;
