import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";
import ProductPage from "./pages/ProductPage/index";
import LandingPage from "./pages/LandingPage/index";
import LoginPage from "./pages/LoginPage/index";
import SignUpPage from "./pages/SignUpPage/index";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StoreProvider } from "./utils/GlobalState";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  console.log(headers, token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          {/* <StoreProvider> */}
          <Header />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
          </Routes>

          {/* <LandingPage /> */}

          <ProductPage />

          <Footer />
          {/* </StoreProvider> */}
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
