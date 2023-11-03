import { MdBuild } from "react-icons/md";
import './style.css';

function App() {
  return (
  <div className="container">
      <h1 className="titulo">Menu Opções<MdBuild size={25} color="#FFF"/></h1>
      <main className="main">
        <table>
          <tr>
            <td><h2><a href="http://saltinfo.no-ip.com:7788">Auditoria</a></h2></td>
            <td><h2><a href="https://cep.salthomol.com.br">BuscaCEP</a></h2></td>            
            <td><h2><a href="https://homolcheckin.siegestao.com.br/democheckin">CheckinOnline</a></h2></td>
          </tr>
          <tr>
            <td class="cell-hyphen"><h2><a href="https://homolcheckin.siegestao.com.br/democheckinRecep">CheckinOnline Recepcao</a></h2></td>
            <td><h2><a href="http://saltinfo.no-ip.com:8080">Gestao</a></h2></td>
            <td><h2><a href="https://suporte.salthomol.com.br">Suporte</a></h2></td>            
          </tr>
          <tr>
            <td><h2><a href="http://siegestao.com.br/demogestao">SIEGestao</a></h2></td>
            <td class="cell-hyphen"><h2><a href="http://siegestao.com.br/homolcatarina">Gestao Homol Catarina</a></h2></td>
            <td class="cell-hyphen"><h2><a href="http://siegestao.com.br/homolbiolux">Gestao Homol Biolux</a></h2></td>
          </tr>
        </table>
      </main>
    </div>
  );
}

export default App;
