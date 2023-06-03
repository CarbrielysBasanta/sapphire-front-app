import { apolloClient } from "src/utils/apollo";
import { ref, onMounted } from "vue";
import gql from 'graphql-tag'

const CHARACTERS_QUERY = gql`
query Query {
  hello
}
`
export function getData() {
  const dataRef = ref(null)
  const query = async () => {
    apolloClient.query({
      query: CHARACTERS_QUERY,
      fetchPolicy: 'network-only'
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err, 'err');
      })
  }
  return {
    query
  }
}
