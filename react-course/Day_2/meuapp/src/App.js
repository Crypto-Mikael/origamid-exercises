import React from 'react';
import * as data from './data'
function App() {
  const dados = data.luana;

  const sumValues = (data) => {
    return data.compras.map((itens) => 
      Number(itens.preco.split(" ")[1]))
      .reduce((prev, curr) => prev + curr)
  }

  const statusValue = (boolean) => {
    return boolean ? 'Ativa' : 'Inativa';
  }
  return (
    <> 
     <h3>{`Nome: ${dados.cliente}`}</h3>
     <h3>{`Idade: ${dados.idade}`}</h3>
     Situação:{' '}
     <span style={{ color: dados.ativa ? 'green' : 'red' }}>{statusValue(dados.ativa)}</span>
     <h3>{`Total gasto: R$ ${sumValues(dados)}`}</h3>
     { statusValue(dados.ativa) === 'Inativa' ? <p>Você está gastando demais</p> : null}
    </>
  );
}

export default App;
