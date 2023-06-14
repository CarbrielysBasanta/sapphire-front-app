import { apolloClient } from "src/utils/apollo";
import { ref, onMounted } from "vue";
import { SAVE_USER } from "./graphql/user";
import { useQuasar } from "quasar";
import { useRouter } from "vue-router";

export function registerUser() {
  const $q = useQuasar()
  const $router = useRouter()
  const name = ref("")
  const user = ref("")
  const email = ref("")
  const password = ref("")
  const repeatPassword = ref("")
  const date = ref("")
  const register = async () => {
    const dataToProcess = {
      fullName: name.value,
      nickName: user.value,
      email: email.value,
      password: password.value,
      repeatPassword: repeatPassword.value,
      dateOfBorn: date.value
    }

    console.log(dataToProcess);
    await apolloClient
      .mutate({
        mutation: SAVE_USER,
        variables: {
          data: dataToProcess
        }
      })
      .then(response => {
        console.log(response);
        $q.notify({
          message: "Se han insertado los datos correctamente",
          color: "positive",
          position: "bottom"
        });
        $router.push('/')
      })
      .catch(error => {
        console.log(error);
        console.log($q.version);
        $q.notify({
          message: "Ha ocurrido un error",
          color: "negative",
          position: "bottom"
        })
      })
  }
  return {
    register,
    name,
    user,
    email,
    password,
    repeatPassword,
    date,
  }
}
