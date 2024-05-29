const { createElement: e } = React;

function App() {
  return e(
    'div',
    null,
    e('h1', null, 'Hola mundo desde React'),
    e('p', null, 1 + 1),
    e('p', null, [1, 2, 3, 4, 5].toString()),
    e('p', null, true ? 'True' : 'False')
  );
}

ReactDOM.render(e(App), document.getElementById('myApp'));
