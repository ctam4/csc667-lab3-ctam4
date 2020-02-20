const doStuff = () => {
  console.log('hello');
  fetch('/abc')
    .then(res => res.json())
    .then(data => alert(data.response))
    .catch(console.log);
};
