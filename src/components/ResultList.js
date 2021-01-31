import React from "react";
import ResultItems from "./ResultItems";

export default function ResultList({ items }) {
  return (
    <div>
      <ResultItems items={items} />
    </div>
  );
}
