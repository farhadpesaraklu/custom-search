import React from "react";
import SearchInput from "./components/SearchInput";
import ResultList from "./components/ResultList";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Jumbotron from "react-bootstrap/Jumbotron";
import Error from "./components/Error";
import { getDataQuery } from "./redux/actions/actions";
import { connect } from "react-redux";

function App(props) {
  const [listItems, setListItems] = React.useState([]);
  const [err, setErr] = React.useState(false);

  function getResult(keyword) {
    if (keyword) {
      props
        .getDataQuery(keyword)
        .then((response) => {
          const { items } = response;
          setListItems(items);
        })
        .catch(() => {
          setErr(true);
        });
    } else {
      setTimeout(() => {
        setListItems([]);
      }, 1000);
    }
  }

  return (
    <Jumbotron style={{ minHeight: "100vh", marginBottom: 0 }}>
      <Header />
      <br />
      <SearchInput handleGetResult={getResult} />
      {!err ? listItems && <ResultList items={listItems} /> : <Error />}
    </Jumbotron>
  );
}

const mapStateToProps = (state) => {
  return {
    data: state.data,
  };
};
const mapActionsToProps = {
  getDataQuery,
};

export default connect(mapStateToProps, mapActionsToProps)(App);
