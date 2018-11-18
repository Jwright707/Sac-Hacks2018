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
import "./list2.css";

class List extends Component {
  //    // Initialize the state
  //     constructor(props){
  //       super(props);
  //       this.state = {
  //         list:[]
  //       }
  //       this.handleSubmit = this.handleSubmit.bind(this);
  //      };

  //      handleSubmit(event){
  //       event.preventDefault();
  //       fetch("https://polar-mesa-35819.herokuapp.com/api/quest", {
  //        method: 'POST',
  //        headers: {
  //          Accept: "application/json",
  //          'Content-Type':'application/json'
  //       },
  //       body: JSON.stringify({
  //         "name": this.Name.value

  //       })
  //       });
  //   // Fetch the list on first mount
  //   componentDidMount() {
  //     this.getList();
  //   }

  //   // Retrieves the list of items from the Express app
  //   getList = () => {
  //     console.log("function to send to back end");
  //   };

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
              <Col md={{ size: 8, offset: 2 }}>
                <FormGroup>
                  <Label for="Quest Name">Quest Name</Label>
                  <Input
                    type="text"
                    name="questName"
                    id="questName"
                    placeholder="Quest Name"
                  />
                </FormGroup>
              </Col>
              <Row form>
                <Col md={8}>
                  <FormGroup>
                    <Label for="Address">Quest Location Info</Label>
                    <Input
                      type="text"
                      name="questAddress"
                      id="questAddress"
                      placeholder="Address"
                    />
                  </FormGroup>
                </Col>
                <Col md={4}>
                  <FormGroup>
                    <Label for="Rewards">Rewards</Label>
                    <Input
                      type="text"
                      name="rewards"
                      id="rewards"
                      placeholder="Reward's Title"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <Row form>
                <Col md={2}>
                  <FormGroup>
                    <Label for="City" />
                    <Input
                      type="text"
                      name="city"
                      id="city"
                      placeholder="City"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="Zip Code" />
                    <Input
                      type="text"
                      name="zipCode"
                      id="zipCode"
                      placeholder="Zip Code"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="State" />
                    <Input
                      type="text"
                      name="state"
                      id="state"
                      placeholder="State"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="Country" />
                    <Input
                      type="text"
                      name="country"
                      id="country"
                      placeholder="Country"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="RewardValue" />
                    <Input
                      type="text"
                      name="rewardValue"
                      id="rewardValue"
                      placeholder="Reward Value"
                    />
                  </FormGroup>
                </Col>
                <Col md={2}>
                  <FormGroup>
                    <Label for="RewardQuantity" />
                    <Input
                      type="text"
                      name="rewardQuantity"
                      id="rewardQuantity"
                      placeholder="Reward Quantity"
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label for="Description">Description</Label>
                <Input
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                />
              </FormGroup>
              <Button color="primary">Submit</Button>
            </Form>
          </ListGroup>
        )}
      </div>
    );
  }
}

export default List;
