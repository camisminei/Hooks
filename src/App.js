import React, { useState } from "react";

function App() {

  /*const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React Hooks'])

  const [input, setInput] = useState('')

  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('')
  }

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );*/

  //CONTADOR USANDO USESTATE

  // declarando uma nova variavel de state, na qual chamaremos de contador

  const [contador, setContador] = useState(0)

  return (
    <div>
      <p>Vou clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  )
}

export default App;
