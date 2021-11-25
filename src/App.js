import { useState } from 'react';
import { Form } from './components/Form';
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);


  const onAddTask = (name) => {
    let tasksAuxs = [...tasks];
    tasksAuxs.push({ name: name, done: false });
    setTasks(tasksAuxs);
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-8 col-lg-8 offset-md-2 offset-lg-2">
            <div className="card mt-5 form-todo">
              <div className="card-header">
                <div className="d-flex">
                  <Form parentCallback={(event) => onAddTask(event)} />
                </div>
              </div>
              <div className="card-body">  
                {tasks.map(task => {
                  return (
                    <div className="card-todo">
                      <div className="col-10">
                        <h5 className="text-todo">{task.name}</h5>
                      </div>
                      <div className="col-2">
                        <input type="checkbox" className="input-group" onChange={(event) => task.done = event.target.checked}></input>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
