'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      todos: todos
    };
    return _this;
  }

  _createClass(App, [{
    key: 'saveTask',
    value: function saveTask(oldTask, newTask) {
      var foundToDo = _.find(this.state.todos, function (todo) {
        return todo.task === oldTask;
      });
      foundToDo.task = newTask;
      this.setState({ todos: this.state.todos });
    }
  }, {
    key: 'deleteTask',
    value: function deleteTask(taskToDelete) {
      _.remove(this.state.todos, function (todo) {
        return todo.task === taskToDelete;
      });
      this.setState({ todos: this.state.todos });
    }
  }, {
    key: 'toggleTask',
    value: function toggleTask(task) {

      var foundToDo = _.find(this.state.todos, function (todo) {
        return todo.task === task;
      });
      foundToDo.isCompleted = !foundToDo.isCompleted;
      this.setState({ todos: this.state.todos });
    }
  }, {
    key: 'createTaskToDo',
    value: function createTaskToDo(task) {
      this.state.todos.push({
        task: task,
        isCompleted: false
      });

      this.setState({ todos: this.state.todos });
    } // end of create task to do

  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'My To Do List !'
        ),
        React.createElement(TodosList, {
          todos: this.state.todos,
          toggleTask: this.toggleTask.bind(this),
          saveTask: this.saveTask.bind(this),
          deleteTask: this.deleteTask.bind(this)
        }),
        React.createElement(CreateToDo, { todos: this.state.todos, createTask: this.createTaskToDo.bind(this) })
      );
    }
  }]);

  return App;
}(React.Component); // end of app


var TodosList = function (_React$Component2) {
  _inherits(TodosList, _React$Component2);

  function TodosList() {
    _classCallCheck(this, TodosList);

    return _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).apply(this, arguments));
  }

  _createClass(TodosList, [{
    key: 'renderItems',
    value: function renderItems() {
      var props = _.omit(this.props, 'todos');
      return this.props.todos.map(function (todo, index) {
        return React.createElement(ToDosListItem, _extends({ key: index }, todo, props));
      });
    }
  }, {
    key: 'render',
    value: function render() {
      //  console.log(this.props.todos);
      return React.createElement(
        'table',
        null,
        React.createElement(TodoListHeaders, null),
        React.createElement(
          'tbody',
          null,
          this.renderItems()
        )
      );
    }
  }]);

  return TodosList;
}(React.Component);

var TodoListHeaders = function (_React$Component3) {
  _inherits(TodoListHeaders, _React$Component3);

  function TodoListHeaders() {
    _classCallCheck(this, TodoListHeaders);

    return _possibleConstructorReturn(this, (TodoListHeaders.__proto__ || Object.getPrototypeOf(TodoListHeaders)).apply(this, arguments));
  }

  _createClass(TodoListHeaders, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'thead',
        null,
        React.createElement(
          'tr',
          null,
          React.createElement(
            'th',
            null,
            'Tasks  '
          ),
          React.createElement(
            'th',
            null,
            'Actions '
          )
        )
      );
    }
  }]);

  return TodoListHeaders;
}(React.Component); //TodoListHeaders

var ToDosListItem = function (_React$Component4) {
  _inherits(ToDosListItem, _React$Component4);

  function ToDosListItem(props) {
    _classCallCheck(this, ToDosListItem);

    var _this4 = _possibleConstructorReturn(this, (ToDosListItem.__proto__ || Object.getPrototypeOf(ToDosListItem)).call(this, props));

    _this4.state = {
      isEditing: false
    };
    return _this4;
  }

  _createClass(ToDosListItem, [{
    key: 'onEdit',
    value: function onEdit() {
      this.setState({ isEditing: true });
    }
  }, {
    key: 'onSaveClick',
    value: function onSaveClick(event) {
      event.preventDefault();
      var oldTask = this.props.task;
      var newTask = this.refs.editImput.value;
      this.props.saveTask(oldTask, newTask);
      this.setState({ isEditing: false });
    }
  }, {
    key: 'onCancelClick',
    value: function onCancelClick() {
      this.setState({ isEditing: false });
    }
  }, {
    key: 'renderTextSection',
    value: function renderTextSection() {
      var _props = this.props,
          task = _props.task,
          isCompleted = _props.isCompleted; // destructuring this.props

      var taskStyle = {
        color: isCompleted ? 'lime' : '#faa500',
        'font-size': isCompleted ? '20px' : '18px',
        cursor: 'pointer'
      };

      if (this.state.isEditing) {
        return React.createElement(
          'td',
          null,
          React.createElement(
            'form',
            { onSubmit: this.onSaveClick.bind(this) },
            React.createElement('input', { className: 'tempInput', type: 'text', defaultValue: task, ref: 'editImput' })
          )
        );
      }
      return React.createElement(
        'td',
        null,
        React.createElement(
          'p',
          { onClick: this.props.toggleTask.bind(this, task), style: taskStyle, className: 'theTasks' },
          task
        )
      );
    }
  }, {
    key: 'renderActionsSection',
    value: function renderActionsSection() {
      if (this.state.isEditing) {
        return React.createElement(
          'td',
          null,
          React.createElement(
            'button',
            { onClick: this.onSaveClick.bind(this), className: 'buttonuri' },
            ' Save '
          ),
          React.createElement(
            'button',
            { onClick: this.onCancelClick.bind(this), className: 'buttonuri' },
            ' Cancel '
          )
        );
      }

      return React.createElement(
        'td',
        null,
        React.createElement(
          'button',
          { onClick: this.onEdit.bind(this), className: 'buttonuri' },
          ' Edit '
        ),
        React.createElement(
          'button',
          { onClick: this.props.deleteTask.bind(this, this.props.task), className: 'buttonuri' },
          ' Delete '
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'tr',
        null,
        this.renderTextSection(),
        this.renderActionsSection()
      );
    }
  }]);

  return ToDosListItem;
}(React.Component);

var CreateToDo = function (_React$Component5) {
  _inherits(CreateToDo, _React$Component5);

  function CreateToDo(props) {
    _classCallCheck(this, CreateToDo);

    var _this5 = _possibleConstructorReturn(this, (CreateToDo.__proto__ || Object.getPrototypeOf(CreateToDo)).call(this, props));

    _this5.state = {
      error: null
    };
    return _this5;
  }

  _createClass(CreateToDo, [{
    key: 'handleCreate',
    value: function handleCreate(event) {
      event.preventDefault();

      var createInput = this.refs.onSubmitInput;
      var newAddedTask = createInput.value;
      var validateInput = this.validateInput(newAddedTask);

      if (validateInput) {
        this.setState({ error: validateInput });
        return;
      }
      this.setState({ error: null });
      console.log(this.props.createTask);
      console.log(this.refs.onSubmitInput.value);
      var unique = this.refs.onSubmitInput.value;
      this.props.createTask(unique);

      this.refs.onSubmitInput.value = '';
    }
  }, {
    key: 'validateInput',
    value: function validateInput(task) {
      if (!task) {
        return 'Please add a task !';
      } else if (_.find(this.props.todos, function (todo) {
        return todo.task === task;
      })) {
        return 'Task already exists !';
      } else {
        return null;
      }
    } // end of validateInput

  }, {
    key: 'renderError',
    value: function renderError() {
      if (!this.state.error) {
        return null;
      }

      return React.createElement(
        'div',
        { style: { color: 'red', 'font-size': '30px' } },
        ' ',
        this.state.error
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        { className: 'createToDo' },
        React.createElement(
          'form',
          { onSubmit: this.handleCreate.bind(this) },
          React.createElement('input', { type: 'text', placeholder: 'Add a new Task here ', ref: 'onSubmitInput' }),
          React.createElement(
            'button',
            { className: 'buttonuri' },
            ' Create new Task! '
          ),
          this.renderError()
        )
      );
    }
  }]);

  return CreateToDo;
}(React.Component);

var todos = [{
  task: 'Demo task ... Completed',
  isCompleted: true
}, {
  task: 'Demo task ... Not Completed',
  isCompleted: false
}];

ReactDOM.render(React.createElement(App, null), document.getElementById('wrapper'));