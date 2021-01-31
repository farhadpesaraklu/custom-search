import React from "react";
import Alert from "react-bootstrap/Alert";

export default function Error() {
  return (
    <Alert variant="danger">
      <Alert.Heading>OOPS!</Alert.Heading>
      <p>
          It seems that you have reached the limit of queries per day of trial use.
      </p>
      <hr />
      <p className="mb-0">
        You always can have a permium account if you want.
      </p>
    </Alert>
  );
}
