import { MdBuild } from "react-icons/md";
import './style.css';
import Img1 from "./logosalt.jpg";

function App() {
  return (
  <div className="container">
      <img src={Img1} alt="logotipo salt" />
      <main className="main">
        <h2><a href="http://salt.com.br">APP 1</a></h2>
        <h2><a href="http://salt.com.br">APP 2</a></h2>
        <h2><a href="http://salt.com.br">APP 3</a></h2>
        <h2><a href="http://salt.com.br">APP 4</a></h2>        
      </main>
  </div>
  );
}

export default App;
