import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col
} from "reactstrap";
// import "./pages.css";

class Home extends Component {
  render() {
    return (
      <div className="App">

        <a href="/car">Start Quest</a>

        <Breadcrumb>
          <Row>
            <div style={{ display: "flex", justifyContent: "right" }}>
              <Col xs="6">
                <Card body className="CardBody">
                  <CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={require("./business.jpg")}
                      alt="Card image cap"
                    />

                    <CardTitle>Create a Quest</CardTitle>
                    <CardSubtitle />
                    <CardText>
                      Get more people to attend your event today and create a
                      Quest!
                    </CardText>
                  </CardBody>
                  <Link to={"./list"}>
                    <BreadcrumbItem>
                      <Button color="primary" size="lg">
                        Create Quest
                      </Button>
                    </BreadcrumbItem>
                  </Link>
                </Card>
              </Col>

              <Col xs="6">
                <Card body className="CardBody">
                  <CardBody>
                    <CardImg
                      top
                      width="100%"
                      src={require("./vacation.jpg")}
                      alt="Card image cap"
                    />
                    <CardTitle>Search for a Quest</CardTitle>
                    <CardSubtitle />
                    <CardText>
                      Get rewarded to expereiencing life- search for a quest
                      near you!
                    </CardText>
                  </CardBody>
                  <Link to={"./list2"}>
                    <BreadcrumbItem>
                      <Button color="primary" size="lg">
                        Search Quest
                      </Button>
                    </BreadcrumbItem>
                  </Link>
                </Card>
              </Col>
            </div>
          </Row>
        </Breadcrumb>
      </div >
    );
  }
}
export default Home;
