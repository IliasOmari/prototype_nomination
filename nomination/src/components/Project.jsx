import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Logo from "../images/pop-art.jpg";

const Project = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Logo} width="100px" height="180px" />
      <Card.Body>
        <Card.Title>Project of Ilias Omari </Card.Title>
        <Card.Text>This is the project Ilias.</Card.Text>
        <Button variant="primary">Vote for this project </Button>
      </Card.Body>
    </Card>
  );
};

export default Project;
