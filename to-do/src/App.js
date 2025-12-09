import React, { useState } from 'react';

function App() {
  const [boards, setBoards] = useState({'To-Do':[],'Doing':[],'Done':[]});
  const [newTask, setNewTask] = useState({'To-Do':'','Doing':'','Done':''});
  const addTask = (board) => {
    const task = (newTask[board] || '').trim();
    setBoards(prev => ({ ...prev, [board]: [...prev[board], task] }));
    setNewTask(prev => ({ ...prev, [board]: '' }));
  }
  return (
    <div>
      <h1> To-Do To-Day</h1>
      <ul>
        {Object.keys(boards).map((board) => (
          <li key={board}>
            <h2>{board}
              <input type='text' value={newTask[board]}
                onChange={(e) => setNewTask(prev => ({ ...prev, [board]: e.target.value }))}/>
              <button onClick={() => addTask(board)}>+</button>
            </h2>
            {boards[board].map((task, taskIndex) => (
              <h3 key={taskIndex}>{task}</h3>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;