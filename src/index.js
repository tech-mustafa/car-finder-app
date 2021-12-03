import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import App from "./components";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import 'react-select/dist/react-select.css'
import "react-virtualized/styles.css";
import "react-virtualized-select/styles.css";
import { graphQLUri } from "./utilities/Constants";
import Header from "./components/header";

const cache = new InMemoryCache();
const client = new ApolloClient({
  cache,
  link: new HttpLink({ uri: graphQLUri }),
  dataIdFromObject: (o) => o.id,
});

const Root = () => {
  return (
    <div>
      <ApolloProvider client={client}>
        <Header />
        <App />
      </ApolloProvider>
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
