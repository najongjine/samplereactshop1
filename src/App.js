import React, { useState } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import "./App.css";
import Data from "./data/data.js";
import { Link, Route, Switch } from "react-router-dom";
import Detail from "./Detail.js";
import axios from "axios";

function App() {
  let [shoes, shoes변경] = useState(Data);
  let [재고, 재고변경] = useState([10, 11, 12]);

  let Card = (props) => {
    return (
      <div className="col-md-4">
        <Link to={`/detail/${props.i}`}>
          <img
            src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
            width="100%"
            alt=""
          />
        </Link>
        <h4>{props.shoes.title}</h4>
        <p>
          {props.shoes.content} & {props.shoes.price}
        </p>
      </div>
    );
  };
  return (
    <div className="App">
      <div className="container-fluid py-5 background">
        <h1 className="display-5 fw-bold">Shop</h1>
        <p className="col-md-8 fs-4"></p>
      </div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="row">
              {shoes.map((item, i) => {
                return <Card shoes={item} i={i} key={i} />;
              })}

              {/* {shoes.map((item, i) => {
                return (
                  <div className="col-md-4">
                    <img
                      src={`https://codingapple1.github.io/shop/shoes${
                        i + 1
                      }.jpg`}
                      width="100%"
                    />
                    <h4>{item.title}</h4>
                    <p>
                      {item.content} & {item.price}
                    </p>
                  </div>
                );
              })} */}
            </div>
            <button
              className="btn btn-primary"
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then((result) => {
                    console.log(result.data);
                    var newShoes = [...shoes, ...result.data];

                    shoes변경(newShoes);
                  })
                  .catch(() => {
                    alert("서버에 문제가 있습니다");
                  });
              }}
            >
              더보기
            </button>
          </div>
        </Route>
        <Route path="/detail/:id">
          <Detail shoes={shoes} 재고={재고} 재고변경={재고변경} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
