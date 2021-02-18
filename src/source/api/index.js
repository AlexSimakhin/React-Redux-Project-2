import {root} from './config';

export const api = Object.freeze({
  getAllTodos: {
    fetch: () => {
      return fetch(`${root}/todos`, {
        method: "GET",
        headers: {
          'x-user': 'Simakhin',
          'Content-Type': 'application/json',
        }
      })
    }
  },
  createTodos: {
    fetch: (body) => {
      return fetch(`${root}/todos`, {
        method: "POST",
        headers: {
          'x-user': 'Simakhin',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      })
    }
  },
  getTodoByHash: {
    fetch: (hash) => {
      return fetch(`${root}/todos/${hash}`, {
        method: "GET",
        headers: {
          'x-user': 'Simakhin',
          'Content-Type': 'application/json',
        }
      })
    }
  },
  updateTodoByHash: {
    fetch: (hash, body) => {
      return fetch(`${root}/todos/${hash}`, {
        method: "PUT",
        headers: {
          'x-user': 'Simakhin',
          'Content-Type': 'application/json',
        },
        body: body,
      })
    }
  },
  removeTodoByHash: {
    fetch: (hash) => {
      return fetch(`${root}/todos/${hash}`, {
        method: "DELETE",
        headers: {
          'x-user': 'Simakhin',
          'Content-Type': 'application/json',
        }
      })
    }
  },
});