import { useState } from 'react';
import { Form } from './components/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import './App.css';

const App = () => {

  const [tasks, setTasks] = useState([]);


  const onAddTask = (name) => {
    let tasksAuxs = [...tasks];
    tasksAuxs.push({ name: name, done: false });
    setTasks(tasksAuxs);
  }

  const onRemoveTask = (task) => {
    let tasksAuxs = [...tasks];
    
  

    setTasks(tasksAuxs.filter((it) =>  it != task));
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
                        <button className="btn btn-danger" onClick={(event) => onRemoveTask(task)}>
                        <FontAwesomeIcon icon={faTrash} />
                        </button>
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
