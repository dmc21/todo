import { useState } from "react";

export const Form = (props) => {

    const [taskName, setTaskName] = useState("");

    const callParent = (event) => {
        props.parentCallback(taskName);
        event.preventDefault();

        setTaskName("");
    }

    return (
        <div className="container mt-3">
            <form onSubmit={(event) => callParent(event)}>
                <div className="d-flex">
                    <div className="col-9">
                        <input type="text" required="true" value={taskName} className="form-control input-text-todo" onChange={(event) => setTaskName(event.target.value)}></input>
                    </div><div className="col-4">
                        <button type="submit" className="btn btn-todo" >Add +</button>
                    </div>
                </div>
            </form>


        </div>
    )

}