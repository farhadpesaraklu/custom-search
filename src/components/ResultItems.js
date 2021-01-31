import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

export default function ResultItems({ items }) {
  return (
    <div>
      <div>
        {items.map((item, index) => {
          return (
            <ListGroup variant="flush" key={index}>
              <ListGroup.Item>
                  <a href={"http://"+item.formattedUrl} target="_blank" rel="noreferrer" >{item.title}</a>
                  <p>{item.snippet}</p>
                  
                  </ListGroup.Item>
            </ListGroup>
          );
        })}
      </div>
    </div>
  );
}
