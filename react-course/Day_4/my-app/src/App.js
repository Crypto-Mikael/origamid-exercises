import React, { useState } from 'react'

function App() {
  const [ativo, setAtivo] = useState(false);
  const [dados, setDados] = useState({ nome: 'Miguel', idade: '18'});

  const handleClick = () => {
     setAtivo(!ativo)
     setDados({ ...dados, faculdade: 'Não possui faculdade'})
  }

  return (
    <>
      <h3>{dados.nome}</h3>
      <h3>{dados.idade}</h3>
      <h3>{dados.faculdade}</h3>
      <button onClick={ handleClick }>{ ativo ? 'Ativo' : 'Inativo'  }</button>
    </>
  );
}

export default App
