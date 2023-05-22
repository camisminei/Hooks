import React, { useState, useEffect, useMemo, useCallback } from "react";

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

  /**const [contador, setContador] = useState(0)
  //criamos umm estado chamado contador, e onde o valor padrão dele começa com zero.
  // quando queremos alterar o valor do state contador nós usamos o setContador()

  return (
    <div>
      <p>Vou clicou {contador} vezes</p>
      <button onClick={() => setContador(contador + 1)}>
        Aumentar
      </button>
    </div>
  )*/

  //HOOK useEffect

  /*const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React Hooks'])

  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefaStorage = localStorage.getItem('tarefas');

    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage))
    }
    return () => { };
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas]);



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

  //HOOK useMemo

  /*const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React Hooks'])

  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefaStorage = localStorage.getItem('tarefas');

    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage))
    }
    return () => { };
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas]);



  function handleAdd() {
    setTarefas([...tarefas, input])
    setInput('')
  }

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong><br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );*/

  // HOOK useCallback
  const [tarefas, setTarefas] = useState([
    'Pagar a conta de Luz',
    'Estudar React Hooks'])

  const [input, setInput] = useState('')

  useEffect(() => {
    const tarefaStorage = localStorage.getItem('tarefas');

    if (tarefaStorage) {
      setTarefas(JSON.parse(tarefaStorage))
    }
    return () => { };
  }, [])

  useEffect(() => {
    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }, [tarefas]);



  const handleAdd = useCallback(() => {
    setTarefas([...tarefas, input])
    setInput('')
  }, [input, tarefas])

  const totalTarefas = useMemo(() => tarefas.length, [tarefas])

  return (
    <div>
      <ul>
        {tarefas.map(tarefa => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
      <br />
      <strong>Você tem {totalTarefas} tarefas!</strong><br />
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button type="button" onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
