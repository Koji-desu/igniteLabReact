import { InMemoryCache, ApolloClient } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4ozcvbx1dza01ywdw7h9qmu/master',
    cache: new InMemoryCache()
})