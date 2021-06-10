import React, { useState, useEffect } from 'react';
import { FiTrash2 } from 'react-icons/fi';
import api from './services/api';
import './App.css';

function App() {
  const [ acao, setAcao ] = useState<string[]>([]);
  const [ acaoMap, setAcaoMap ] = useState<any[]>([]);
  const [ novaAcao, setNovaAcao ] = useState<string>("") ;
  const [ acaoClick, setAcaoClick ] = useState<string>("");
  const [ show, setShow ] = useState<boolean>(false);
  const [ projecaoData, setProjecaoData ] = useState<Date>();
  const [ quantidade, setQuantidade ] = useState<number>(0);
  const [ dataInicio, setDataInicio ] = useState<Date>();
  const [ dataFim, setDataFim ] = useState<Date>();
  const [ compra, setCompra ] = useState<number>(0);
  const [ atual, setAtual ] = useState<number>(0);
  const [ ganhos, setGanhos ] = useState<number>(0);
  const [ historico, setHistorico ] = useState([]);

  const handleAdicionar = async () => {
    
    if(acao.indexOf(novaAcao) >= 0) {
      setNovaAcao("");
      console.log("Esta no array");
    }
    else {
      setAcao([...acao, novaAcao]);
      console.log("Nao esta no array");
      const { data } = await api.get(`/stocks/${novaAcao}/quote`)
      setNovaAcao("");
    }
    console.log(acao);

  }


  return (
    <>
      {
        // Top Bar
      }
      <div>
        <header className="header"><p className="titleHeader">MeuInvestimento </p></header>
      </div>

      <div className="bodyPage">
        {
          // Search bar
        }
        <div className="searchContainer">
          <div className="goroupBar">
            {/* <form > */}
              <input className="search" value={String(novaAcao)} onChange={e => setNovaAcao(e.target.value)}/>
              <button className="searchButton" onClick={handleAdicionar}>Adicionar</button>
            {/* </form> */}
          </div>
        </div>

        {
          //Portifolio Area
        }
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

         {
          show === true ?
          <>
            <div className="projecaoContainer">
              <div className="container1">
                <form onSubmit={()=>{}}>
                  <h1>Projeção ACAO</h1>
                  <div className="input-group">
                    <div className="input-block">
                      <label htmlFor="latitude">Data</label>
                      <input 
                        type="date" 
                        name="latitude" 
                        id="latitude" 
                        required 
                      />
                    </div>

                    <div className="input-block">
                      <label htmlFor="longitude">Quantidade</label>
                      <input 
                        type="number" 
                        name="longitude" 
                        id="longitude" 
                        required 
                      />
                    </div>
                  </div>
                  <button type="submit" >Aplicar</button>
                </form>
              </div>
              <div className="container2">
                <div>
                  <p>Compra:</p>
                  <p>R$120,00</p>
                </div>
                <div>
                  <p>Atual:</p>
                  <p>R$120,00</p>
                </div>
                <div>
                  <p>Ganhos:</p>
                  <p>R$120,00</p>
                </div>
              </div>
            </div>

            <div >
              <div className="historicoContainer">
                <div className="historicoBox">
                  <form onSubmit={()=>{}}>
                    <div className="title">
                      <h1>Histórico ACAO</h1>
                    </div>
                    <div className="input-group">
                      <div className="input-block">
                        <label htmlFor="latitude">Data</label>
                        <input 
                          type="date" 
                          name="latitude" 
                          id="latitude" 
                          required 
                        />
                      </div>
                      <div className="input-block">
                        <label htmlFor="longitude">Quantidade</label>
                        <input 
                          type="number" 
                          name="longitude" 
                          id="longitude" 
                          required 
                        />
                      </div>
                      <button type="submit" >Aplicar</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className="resultTop">
                <p className="first">Abertura</p>
                <p>Menor</p>
                <p>Maior</p>
                <p>Fechamento</p>
                <p className="last">Data</p>
              </div>

              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              <div className="resultBox">
                <p className="first">R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p>R$150,00</p>
                <p className="last">09/06/2021</p>
              </div>
              
            </div>
          </>
          :
          <div/>
        }

      </div>
    </>
  );
}

export default App;
