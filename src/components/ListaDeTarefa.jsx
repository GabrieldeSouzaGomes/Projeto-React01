import React, { useState } from 'react';

function ListaDeTarefa () { 
    const [tarefas, setTarefas] = useState([]);
    const [novaTarefa, setNovaTarefa] = useState(''); 

    const adicionarTarefa = () => {
        if (novaTarefa.trim() !=='') {
            setTarefas([...tarefas, novaTarefa]); 
            setNovaTarefa('');
        }
    };
    
    const removerTarefa = (index) => {
        const novasTarefas = [...tarefas]; 
        novasTawrefas.splice(index, 1); 
        setTarefas(novasTarefas);

    }; 

    return (
        <div>
            <h2>Lista de Tarefas</h2> 
            <input 
            type="text"
            value={(e) => setNovaTarefa(e.target.value)}
            placeholder="Adicione uma nova tarefa"
            /> 
            <button onClick={adicionarTarefa}><Adicionar></Adicionar></button>
            <ul>
                {tarefas.map((tarefa, index) => ( 
                    <li key={index}>
                        {tarefa}{' '}
                        <button onClick={() => removerTarefa(index)}>Remover</button>
                    </li>
                 ))}
            </ul>
        </div>
    );
}
export default ListaDeTarefa;