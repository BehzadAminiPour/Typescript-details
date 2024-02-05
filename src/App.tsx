import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/users/1";

function App() {
  axios.get(url).then((response) => console.log(response.data));
  return (
    <>
      <h1>Hello typescript</h1>
    </>
  );
}

export default App;
