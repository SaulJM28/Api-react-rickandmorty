import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./style.css";

const RickAndMortyList = () => {
  const [list, setList] = useState([]);

  const getRickAndMortyList = () => {
    fetch("https://rickandmortyapi.com/api/character").then((res) => {
      res.json().then((response) => {
        setList(response.results);
      });
    });
  };

  useEffect(() => {
    getRickAndMortyList();
  }, []);

  return list?.map((item) => {
    return (
        <Card key={item.id} className="carta">
          <Row>
            <Col>
              <Image className="Fluid" src={item.image}></Image>
            </Col>
            <Col>
              <Card.Title>{item.name}</Card.Title>
            </Col>
          </Row>
        </Card>
    );
  });
};

export default RickAndMortyList;
