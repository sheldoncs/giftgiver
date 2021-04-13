import React, { Component } from "react";
import { Form, FormGroup, Button } from "react-bootstrap";

class Gift extends Component {
  state = { person: "", present: "" };

  render() {
    return (
      <div>
        <Form>
          <FormGroup>
            <label for="name">Person</label>
            <input
              type="text"
              id="person"
              className="input-person"
              placeholder="Enter Person"
              onChange={(event) =>
                this.setState({ person: event.target.value })
              }
            />
          </FormGroup>
          <FormGroup>
            <label for="name">Present</label>
            <input
              type="text"
              id="present"
              className="input-present"
              placeholder="Enter Present"
              onChange={(event) =>
                this.setState({ present: event.target.value })
              }
            />
          </FormGroup>
        </Form>
        <Button
          onClick={() => this.props.removeGift(this.props.gift.id)}
          className="btn-remove"
        >
          Remove Gift
        </Button>
      </div>
    );
  }
}

export default Gift;
