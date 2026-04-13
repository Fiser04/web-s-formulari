import React, { Component } from "react";

class TodoListItem extends Component {
  isBeingDeleted = false;

  componentWillUnmount() {
    if (this.isBeingDeleted) {
      console.log(
        "componentWillUnmount: položka odmountovaná",
        this.props.todo.id,
      );

      if (typeof this.props.onRemoved === "function") {
        this.props.onRemoved(this.props.todo);
      }
    }
  }

  handleDelete = () => {
    this.isBeingDeleted = true;
    this.props.onDelete(this.props.todo.id);
  };

  render() {
    return (
      <li>
        {this.props.todo.title}{" "}
        <button type="button" onClick={this.handleDelete}>
          Smazat
        </button>
      </li>
    );
  }
}

class TodosExample extends Component {
  toastTimeoutId = null;

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      loading: true,
      removedText: "",
      removedVisible: false,
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount: začínám načítat data");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          todos: data,
          loading: false,
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log(
        "componentDidUpdate: data byla načtena a komponenta se překreslila",
      );
    }
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((todo) => todo.id !== id),
    }));
  };

  showRemoved = (todo) => {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }

    this.setState({
      removedText: `Položka ${todo.id} byla odstraněna.`,
      removedVisible: true,
    });

    this.toastTimeoutId = setTimeout(() => {
      this.setState({ removedVisible: false });
    }, 1500);
  };

  componentWillUnmount() {
    if (this.toastTimeoutId) {
      clearTimeout(this.toastTimeoutId);
    }
  }

  render() {
    console.log("render");

    return (
      <div>
        <h2>Načítání dat z API</h2>

        {this.state.loading ? (
          <p>Načítám data...</p>
        ) : (
          <div>
            {this.state.removedVisible ? <p>{this.state.removedText}</p> : null}

            <ul>
              {this.state.todos.map((todo) => (
                <TodoListItem
                  key={todo.id}
                  todo={todo}
                  onDelete={this.handleDelete}
                  onRemoved={this.showRemoved}
                />
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  }
}

export default TodosExample;

// ------------------------------------------------------------------
/*
import React, { Component } from "react";

class TodosExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      loading: true
    };

    console.log("constructor");
  }

  componentDidMount() {
    console.log("componentDidMount: začínám načítat data");

    fetch("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then(response => response.json())
      .then(data => {
        this.setState({
          todos: data,
          loading: false
        });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      console.log("componentDidUpdate: data byla načtena a komponenta se překreslila");
    }
  }

  render() {
    console.log("render");

    return (
      <div>
        <h2>Načítání dat z API</h2>

        {this.state.loading ? (
          <p>Načítám data...</p>
        ) : (
          <ul>
            {this.state.todos.map(todo => (
              <li key={todo.id}>
                {todo.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default TodosExample;
*/
