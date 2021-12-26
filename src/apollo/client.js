import {
  ApolloClient
} from 'apollo-client'
import {
  InMemoryCache
} from 'apollo-cache-inmemory'
import {
  HttpLink
} from 'apollo-link-http'

export const client = new ApolloClient({
  link: new HttpLink({
    //uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswapv2',
    //uri: 'http://dev-graph.zooswap.net/subgraphs/name/zooswap/oktest4',
    uri: 'http://dev-graph.zooswap.net/subgraphs/name/oasistest-1',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const healthClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/index-node/graphql',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const v1Client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/ianlapham/uniswap',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const stakingClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.thegraph.com/subgraphs/name/way2rach/talisman',
  }),
  cache: new InMemoryCache(),
  shouldBatch: true,
})

export const blockClient = new ApolloClient({
  link: new HttpLink({
    // uri: 'http://dev-graph.zooswap.net/subgraphs/name/zooswap/okextest-blocks',
    uri: 'http://dev-graph.zooswap.net/subgraphs/name/oasistest/oasistest-blocks',
    // uri: 'https://testgraph.kswap.finance/subgraphs/name/blocklytics/ethereum-blocks',
  }),
  cache: new InMemoryCache(),
})