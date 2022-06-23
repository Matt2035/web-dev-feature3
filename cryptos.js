// users service with a single method
// requests array of users from a third-party api via axios
export function getCryptos() {
  const axios = window.axios;
  return axios.get("myData.json").then((response) => {
    return response.data.data;
  });
}
