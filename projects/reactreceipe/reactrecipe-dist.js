'use strict';

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
      todos: todos // same thing ast todos:todos just in ES6 syntax
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          ' Salut This is React todos List'
        ),
        React.createElement(TodosList, { todos: this.state.todos })
      );
    }
  }]);

  return App;
}(React.Component); // this is the clas I am rendering and where I am adding components

var TodosList = function (_React$Component2) {
  _inherits(TodosList, _React$Component2);

  function TodosList() {
    _classCallCheck(this, TodosList);

    return _possibleConstructorReturn(this, (TodosList.__proto__ || Object.getPrototypeOf(TodosList)).apply(this, arguments));
  }

  _createClass(TodosList, [{
    key: 'renderItems',
    value: function renderItems() {
      // method declared above to use for mapping the todos
      return;
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'table',
        null,
        React.createElement(TodoListHeaders, null),
        React.createElement(
          'tr',
          null,
          ' ',
          this.renderItems(),
          ' '
        )
      );
    }
  }]);

  return TodosList;
}(React.Component); //end of TodosList

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

var todos = [{
  task: 'make ract tutorial',
  isComplted: false
}, {
  task: 'sa invat',
  isComplted: true
}]; // end of todos


ReactDOM.render(React.createElement(App, null), document.getElementById('wrapper'));