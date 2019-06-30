function FetchEvents() {
  const url = 'http://localhost:3000/tasks';

  function postTodoTask(searchTerm) {
    const options = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(searchTerm)
    };
    fetch(url, options)
      .then((response) => response.json);
  }

  function getTodoTasks() {
    return fetch(url);
  }

  return {
    postTodoTask,
    getTodoTasks
  };
}
