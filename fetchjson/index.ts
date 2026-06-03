import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then(response => {
  // Pretty-print JSON with 2-space indentation
  const todo = response.data;

  const ID = todo.ID;
  const title = todo.Title;
  const finished = todo.fisinhed;

  console.log(`
    The todo with id: ${ID}
    Has a title of: ${title}
    Is it finished? ${finished}
  `);
});