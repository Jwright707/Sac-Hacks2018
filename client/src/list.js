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



  initAutocomplete = () => {
    const google = window.google;
    console.log(this.refs['pac-input']);
    var map = new google.maps.Map(this.refs['google-map'], {
      center: {lat: -33.8688, lng: 151.2195},
      zoom: 13,
      mapTypeId: 'roadmap'
    });

    // Create the search box and link it to the UI element.
    var input = this.refs['pac-input'];
    var searchBox = new google.maps.places.SearchBox(input);
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    console.log(searchBox);
    // Bias the SearchBox results towards current map's viewport.
    map.addListener('bounds_changed', function() {
      searchBox.setBounds(map.getBounds());
    });

    var markers = [];
    // Listen for the event fired when the user selects a prediction and retrieve
    // more details for that place.
    searchBox.addListener('places_changed', function() {
      var places = searchBox.getPlaces();

      if (places.length == 0) {
        return;
      }

      // Clear out the old markers.
      markers.forEach(function(marker) {
        marker.setMap(null);
      });
      markers = [];

      // For each place, get the icon, name and location.
      var bounds = new google.maps.LatLngBounds();
      places.forEach(function(place) {
        if (!place.geometry) {
          console.log("Returned place contains no geometry");
          return;
        }
        var icon = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };

        // Create a marker for each place.
        markers.push(new google.maps.Marker({
          map: map,
          icon: icon,
          title: place.name,
          position: place.geometry.location
        }));

        if (place.geometry.viewport) {
          // Only geocodes have viewport.
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });
      map.fitBounds(bounds);
    });
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
    // this.initAutocomplete();
  };

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
                  {/* <FormGroup id="map-container">
                    <Label for="map">Location</Label>
                    <Input id="pac-input" ref="pac-input" className="controls" type="text" placeholder="Search Box"/>
                    <div id="map" ref="google-map"></div>
                  </FormGroup> */}
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
            <FormGroup>
              <Label for="map">Location</Label>
              <Input id="pac-input" ref="pac-input" className="controls" type="text" placeholder="Search Box"/>
              <div id="map" ref="google-map"></div>
            </FormGroup>
          </ListGroup>
        )}
      </div>
    );
  }
}


export default List;
