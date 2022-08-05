import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Button, Row, Col, Form, FormControl } from "react-bootstrap";
import Slider from "./Slider";

import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import SinginForm from "../pages/Singin";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "Opx white",
    width: "30%",
    height: "40%",
    boxShadow: theme.spacing(2, 4, 3),
  },
}));

const Header = () => {
  const [navbar, setNavbar] = useState();
const [open , setOpen] = useState(false);

const handleOpen = () => {
  setOpen(true);
}
const handleClose = () => {
  setOpen(false);
}
const classes = useStyles();

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
    <div>
      <div className={navbar ? "nn active " : "nn"}>
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
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                {" "}
                Explore
              </a>
            </li>
            <li className="sli">
              {" "}
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                <span className="global">global</span>
              </a>
            </li>
            <li className="tli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                RSPKR
              </a>{" "}
            </li>
            <li className="tli">
              <a className={navbar ? "linkcolor" : "disactivecolor"} href="/">
                Become a Seller
              </a>{" "}
            </li>
            <li className={navbar ? "linkcolor" : "disactivecolor"} onClick={handleOpen}>
             Sing in 
            </li>
            <li className="bli">
              {" "}
              <a
                className={navbar ? "linkcolor" : "disactivecolor"}
                href="/join"
              >
                <Button variant="outline-success mt-1">Join</Button> {""}{" "}
              </a>{" "}
            </li>
          </ul>
        </Row>
      </div>
      <Slider />

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onclose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <SinginForm />
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default Header;
