import { InMemoryCache, ApolloClient } from '@apollo/client';
import { ApolloProvider } from '@apollo/react-hooks'
import {PokemonContainer} from './containers/PokemonContainer'

function App() {

  const cache = new InMemoryCache({})
  const client = new ApolloClient({
    cache: cache,
    uri: 'https://graphql-pokemon2.vercel.app/'
  })

  return (
    <ApolloProvider client={client}>
        <main>
            <PokemonContainer />
        </main>
    </ApolloProvider>
  );
}

export default App;
