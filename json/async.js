fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET'
})
  .then(response => response.json())
  .then(data => console.log(data))

  