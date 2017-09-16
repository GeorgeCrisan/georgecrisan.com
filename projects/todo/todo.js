class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    }
  }

  
  saveTask(oldTask,newTask){
       const foundToDo = _.find(this.state.todos, (todo)=>{ return todo.task === oldTask});
       foundToDo.task = newTask;
       this.setState({todos: this.state.todos});
  }

  deleteTask(taskToDelete){
    _.remove(this.state.todos,(todo)=>{return todo.task === taskToDelete});
    this.setState({todos: this.state.todos});
  }

  toggleTask(task){

     const foundToDo = _.find(this.state.todos, (todo)=>{return todo.task === task});
     foundToDo.isCompleted = !foundToDo.isCompleted;
     this.setState({ todos: this.state.todos });
  }

  createTaskToDo(task){
    this.state.todos.push({
         task: task ,
         isCompleted: false
    });

    this.setState({todos: this.state.todos });

  } // end of create task to do

  render() {
    return (
      <div>
        <h1>My To Do List !</h1>
        <TodosList
                      todos={this.state.todos}
                      toggleTask={this.toggleTask.bind(this)}
                      saveTask = {this.saveTask.bind(this)}
                      deleteTask = {this.deleteTask.bind(this)}
                       />
        <CreateToDo  todos = {this.state.todos} createTask = {this.createTaskToDo.bind(this)}/>
      </div>
    );
  }
}// end of app




class TodosList extends React.Component {
  renderItems() {
     const props = _.omit(this.props,'todos');
    return this.props.todos.map((todo, index) => {
          return  <ToDosListItem key={index} {...todo} {...props}/>;
    });

  }
  render() {
  //  console.log(this.props.todos);
    return (

      <table>
        <TodoListHeaders />
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>

    );
  }

}

class TodoListHeaders extends React.Component {
  render() {
    return (

      <thead>
        <tr>
          <th>Tasks  </th>
          <th>Actions </th>
        </tr>
      </thead>



    );
  }
}//TodoListHeaders

class ToDosListItem extends React.Component {
     constructor(props){
       super(props);
       this.state = {
          isEditing: false
       }
     }

     onEdit(){
       this.setState({isEditing: true});
     }

     onSaveClick(event){
         event.preventDefault();
         const oldTask = this.props.task;
         const newTask = this.refs.editImput.value;
         this.props.saveTask(oldTask,newTask);
         this.setState({isEditing: false});
     }

     onCancelClick(){
       this.setState({isEditing: false});
     }
     
     renderTextSection(){
       const  {task , isCompleted} = this.props ; // destructuring this.props
       const taskStyle = {
         color: isCompleted ? 'lime' : '#faa500',
         'font-size': isCompleted ? '20px' : '18px',
         cursor: 'pointer'
       }

       if(this.state.isEditing){
           return(
            <td>
                <form onSubmit={this.onSaveClick.bind(this)}>
                  <input className='tempInput' type='text' defaultValue={task} ref='editImput'/>
                </form>
            </td>
           );
       }
         return (

          <td><p onClick={this.props.toggleTask.bind(this,task)} style={taskStyle} className='theTasks'>{task}</p></td>
         );
     }

     renderActionsSection(){
       if (this.state.isEditing){
         return ( 
          <td>
            <button onClick={this.onSaveClick.bind(this)}  className='buttonuri'> Save </button>
            <button onClick={this.onCancelClick.bind(this)} className='buttonuri'> Cancel </button> 
          </td>
           ); 
       }
           
       return ( 
        <td>
          <button onClick={this.onEdit.bind(this)} className='buttonuri'> Edit </button>
          <button onClick={this.props.deleteTask.bind(this, this.props.task)} className='buttonuri'> Delete </button> 
        </td>

       );

     }
    
  render() {
     return (
      <tr>
         {this.renderTextSection()}
          {this.renderActionsSection()} 
       </tr>
     );
  }
}

class CreateToDo extends React.Component {
      constructor(props){
        super(props);
        this.state = {
          error: null
        }
      }

   handleCreate(event){
     event.preventDefault();
     
       const createInput = this.refs.onSubmitInput;
       const newAddedTask = createInput.value;
       const validateInput = this.validateInput(newAddedTask);
       
       if (validateInput){
          this.setState({error: validateInput});
          return;
       }
       this.setState({error: null});
       console.log(this.props.createTask);
       console.log(this.refs.onSubmitInput.value);
       let unique = this.refs.onSubmitInput.value;
       this.props.createTask(unique);
       

        this.refs.onSubmitInput.value = '';
       
       
   }  

   validateInput(task){
       if(!task){
         return 'Please add a task !';
       } else if (_.find(this.props.todos, (todo)=>{ return todo.task === task})){
         return 'Task already exists !';
       } else {
         return null;
       }

   }// end of validateInput

   renderError(){
      if(!this.state.error){
        return null;
      }
      
      return <div style={{color: 'red', 'font-size': '30px'}}> {this.state.error}</div>

   }

   render(){
     return (
     <div className='createToDo'>   
      <form onSubmit={this.handleCreate.bind(this)} >
         <input   type='text' placeholder='Add a new Task here ' ref='onSubmitInput'/>
         <button className='buttonuri'> Create new Task! </button>  
         {this.renderError()}
      </form>
     </div> 
     );
   }
}


const todos = [{
  task: 'Demo task ... Completed',
  isCompleted: true
},
{
  task: 'Demo task ... Not Completed',
  isCompleted: false
}];


ReactDOM.render(<App />, document.getElementById('wrapper'));  