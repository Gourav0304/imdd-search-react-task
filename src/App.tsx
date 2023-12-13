import { Home } from "./pages/Home/";
import userData from "utils/mockData/userData.json";
import "./App.css";

const App = () => {
  return (
    <div className='App'>
      <Home userData={userData} />
    </div>
  );
};

export default App;
