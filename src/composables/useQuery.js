import { apolloClient } from "src/utils/apollo";
import { ref, onMounted } from "vue";
import { CHARACTERS_QUERY } from "./graphql/hello";
import { LOGIN } from "./graphql/user";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export function getData() {
  const $q = useQuasar()
  const $router = useRouter()
  const dataRef = ref(null)
  const nickName = ref("dd")
  const password = ref("dd")
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

  const login = async () => {
    apolloClient.query({
      query: LOGIN,
      variables: {
        data: {
          nickName: nickName.value,
          password: password.value
        }
      }
    })
      .then(response => {
        console.log(response.data.login.token);
        if (!response.data.login.token) throw 'error-trying-to-login'
        $router.push('/Register')
      })
      .catch(error => {
        console.log(error);
        $q.notify({
          message: "Ha ocurrido un error al iniciar sesión",
          color: "negative",
          position: "bottom"
        })
      })
  }
  return {
    query,
    login,
    nickName,
    password
  }
}
