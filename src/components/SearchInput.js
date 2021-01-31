import React, { useState } from "react";
import Form from "react-bootstrap/Form";

export default function SearchInput({ handleGetResult }) {
  const [keyword, setKeyword] = useState("");

  function handleInputChange(e) {
    setKeyword(e.target.value);
    if (e.target.value.trim()) {
      handleGetResult(e.target.value);
    } else {
      handleGetResult("");
    }
  }

  return (
    <Form>
      <Form.Group controlId="exampleForm.ControlInput1">
        <Form.Control
          placeholder="Please Search Something..."
          value={keyword}
          onChange={handleInputChange}
        />
      </Form.Group>
    </Form>
  );
}
