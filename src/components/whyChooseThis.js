import React from "react";

import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShare,
  faLock,
  faEdit,
  faSave,
} from "@fortawesome/free-solid-svg-icons";

function whyChooseThis(){
    return( 
        <div
        className=" d-flex flex-column p-3 m-3 "
        style={{ textAlign: "center" }}
      >
        <h1>Why Choose This</h1>
        <p>
          This is a wider card with supporting text below as a naturallead-in to
          additional content. This content is a little bit longer.
        </p>

        <CardGroup>
        <Card
          className="m-3 w-10 h-10"
          style={{ border: "none", textAlign: "center" }}
        >
          <FontAwesomeIcon icon={faShare} style={{ color: "blue" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting<br></br> text below as a
              natural lead-in to additional content. <br></br>This content is a
              little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3" style={{ border: "none", textAlign: "center" }}>
          <FontAwesomeIcon icon={faSave} style={{ color: "purple" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting<br></br> text below as a
              natural lead-in to additional content.<br></br> This content is a
              little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>

      <CardGroup>
        <Card className="m-3" style={{ border: "none", textAlign: "center" }}>
          <FontAwesomeIcon icon={faEdit} style={{ color: "red" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting <br></br>text below as a
              natural lead-in to additional content.<br></br> This content is a
              little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="m-3" style={{ border: "none", textAlign: "center" }}>
          <FontAwesomeIcon icon={faLock} style={{ color: "green" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting<br></br> text below as a
              natural lead-in to additional content.<br></br> This content is a
              little bit longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
      </div>
      
    );
}

export default whyChooseThis;