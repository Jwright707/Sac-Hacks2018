import React, { Component } from "react";
import axios from "axios";
import {
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";
import {
  ListGroup,
  ListGroupItem,
  ListGroupItemHeading,
  ListGroupItemText
} from "reactstrap";

class List extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    console.log("function to send to back end");
  };

  render() {
    const { list } = this.state;

    return (
      <div className="App">
        {/* Check to see if any items are found*/}
        {list.length ? (
          <div>
            {/* Render the list of items */}
            {list.map(item => {
              return <div>{item}</div>;
            })}
          </div>
        ) : (
          <ListGroup className="ListGroup">
            <Form>
              <ListGroupItem active>
                <ListGroupItemHeading>Create A Quests</ListGroupItemHeading>
              </ListGroupItem>
              <br />
              <Row form>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Quest Name">Quest Name</Label>
                    <Input
                      type="questName"
                      name="questName"
                      id="Quest Name"
                      placeholder="Quest Name"
                    />
                  </FormGroup>
                </Col>
                <Col md={6}>
                  <FormGroup>
                    <Label for="Quest Location">Quest Location</Label>
                    <Input
                      type="questLocation"
                      name="questLocation"
                      id="Quest Location"
                      placeholder="Quest Location"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="exampleAddress">Address</Label>
                <Input
                  type="text"
                  name="address"
                  id="exampleAddress"
                  placeholder="1234 Main St"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleAddress2">Address 2</Label>
                <Input
                  type="text"
                  name="address2"
                  id="exampleAddress2"
                  placeholder="Apartment, studio, or floor"
                />
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </ListGroup>
        )}
      </div>
    );
  }
}

export default List;
