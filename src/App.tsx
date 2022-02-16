import Header from "./components/Header";
import AddForm from "./components/AddForm";
import UserList from "./components/UserList";
import "./style.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AddForm />
      <UserList />
    </div>
  );
}

export default App;
