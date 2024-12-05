import "./App.css";
import { Background } from "./components/Background/Background";
import { Navbar } from "./components/Navbar/Navbar";
import { MyRoutes } from "./routes/MyRoutes";

function App() {
  return (
    <>
      <Navbar />
      <Background>
        <MyRoutes />
      </Background>
    </>
  );
}

export default App;
