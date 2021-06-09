import React from 'react';
import { FiTrash2 } from 'react-icons/fi';
import './App.css';

function App() {
  return (
    <>

      <div>
        <header className="header"><p className="titleHeader">MeuInvestimento </p></header>
      </div>
      <div className="bodyPage">

        <div className="searchContainer">
          <div className="goroupBar">
            <form onSubmit={()=>{}}>
              <input/>
              <button className="searchButton">Adicionar</button>
            </form>
          </div>
        </div>

        <div className="acaoContainer">
          <ul>
            <li className="acaoBox">
                <header>
                    <div className="acaoInfo">
                    <strong>ACAO</strong>  
                    <span>R$ 120,00</span>
                    </div>    
                    <button type="button" onClick={() => {}}>
                        <FiTrash2 className="trash" size={20} color="#a8a8b3" />
                    </button>          
                </header>
            </li>
            <li className="acaoBox">
                <header>
                    <div className="acaoInfo">
                    <strong>ACAO</strong>  
                    <span>R$ 120,00</span>
                    </div> 
                    <button type="button" onClick={() => {}}>
                        <FiTrash2 className="trash" size={20} color="#a8a8b3" />
                    </button>              
                </header>
            </li>
            <li className="acaoBox">
                <header>
                    <div className="acaoInfo">
                    <strong>ACAO</strong>  
                    <span>R$ 120,00</span>
                    </div>   
                    <button type="button" onClick={() => {}}>
                        <FiTrash2 className="trash" size={20} color="#a8a8b3" />
                    </button>            
                </header>
            </li>
            <li className="acaoBox">
                <header>
                    <div className="acaoInfo">
                    <strong>ACAO</strong>  
                    <span>R$ 120,00</span>
                    </div>  
                    <button type="button" onClick={() => {}}>
                        <FiTrash2 className="trash" size={20} color="#a8a8b3" />
                    </button>             
                </header>
            </li>
          </ul>
        </div>

      </div>
    </>
  );
}

export default App;
