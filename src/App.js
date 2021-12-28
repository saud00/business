import Routes from "./components/Routes";
import { Provider } from "react-redux";
import store from "./store/index";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloProviderHooks } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://127.0.0.1:8000/graphql/",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <ApolloProviderHooks client={client}>
        <Provider store={store}>
          <div>
            <Routes />
          </div>
        </Provider>
      </ApolloProviderHooks>
    </ApolloProvider>
  );
}

export default App;
