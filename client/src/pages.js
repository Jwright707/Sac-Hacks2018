import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Button } from "reactstrap";

class Home extends Component {
  render() {
    return (
      <div className="App">

        <a href="/car">Start Quest</a>

        <Breadcrumb>
          <Link to={"./list"}>
            <BreadcrumbItem>
              <Button color="primary" size="lg">
                Create Quest
              </Button>
            </BreadcrumbItem>
          </Link>

          <Link to={"./list2"}>
            <BreadcrumbItem>
              <Button color="primary" size="lg">
                Search Quest
              </Button>
            </BreadcrumbItem>
          </Link>
        </Breadcrumb>
      </div >
    );
  }
}
export default Home;
