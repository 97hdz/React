//import './App.css';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import PokemonsContainer from './containers/PokemonContainer'
import Header from './components/Header'
import './style/app.css'

function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon2.vercel.app/'
  });

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <main>
          <Header></Header>
          <PokemonsContainer />
        </main>
      </ApolloProvider>
    </div>
  );
}


export default App;
