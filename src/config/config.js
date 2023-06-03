const urls = {
  development: "http://localhost:3000",
  production: "https://api.cuantia.io"
};

export default {
  graphql: {
    url: `${urls.development}/graphql`
  }
}
