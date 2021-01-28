import React from 'react';
import {connect} from 'react-redux';
import {requestTaskCreation} from '../store/mutations'

export const TaskList = ({tasks,name,id, createNewTask}) => (
    <>
    <h3>
        {name}
    </h3>
    <div>
        {tasks.map(item => (
            <>
            <div key={item.id}>
                {item.name}
            </div>
            <button onClick={() => createNewTask(id)}>Add task</button>
            </>
        ))}
    </div>
    </>
)

function mapStateToProps(state, ownProps){
   let groupID = ownProps.id;
   return {
       name:ownProps.name,
       id:groupID,
       tasks:state.tasks.filter(task => task.group === groupID)
   }
}

const mapDispatchToProps = (dispatch,ownProps) => {
    return {
        createNewTask(id){
            console.log("creating new task",id)
            dispatch(requestTaskCreation(id))
        }
    }
}

export const ConnectedTaskList = connect(mapStateToProps,mapDispatchToProps)(TaskList);