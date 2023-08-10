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

function cards(){
    return(
        <CardGroup className="m-5 ">
        <Card
          className="p-4"
          style={{ textAlign: "center" }}
        >
          <FontAwesomeIcon icon={faShare} style={{ color: "blue" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-4" style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faSave} style={{ color: "purple" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-4" style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faEdit} style={{ color: "red" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="p-4" style={{ textAlign: "center" }}>
          <FontAwesomeIcon icon={faLock} style={{ color: "green" }} />
          <Card.Body>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    );
}

export default cards;