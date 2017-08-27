class App extends React.Component {
  constructor(props){
  super(props);
  this.state = {
    todos // same thing ast todos:todos just in ES6 syntax
  }
  }

  render() {
    return (
      <div>
        <h1> Salut This is React todos List</h1>
        <TodosList todos = {this.state.todos }/>
      </div>
    )
  }
}// this is the clas I am rendering and where I am adding components

class TodosList extends React.Component {
  renderItems() {
    // method declared above to use for mapping the todos
    return 
  }
  render() {
    return (

      <table>
        <TodoListHeaders />
        <tr> {this.renderItems()} </tr> 
      </table>

    )
  }
}//end of TodosList

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

const todos = [{
  task: 'make ract tutorial',
  isComplted: false
},
{
  task: 'sa invat',
  isComplted: true
}]; // end of todos





ReactDOM.render(<App />, document.getElementById('wrapper'));