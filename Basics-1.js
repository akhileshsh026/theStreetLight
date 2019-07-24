const render = () => {
  document.getElementById("mountNode").innerHTML = `
     <Div>
         Hello HTML
       <input />
       <pre> ${new Date().toLocaleTimeString()} </pre>
      </Div>
  `;

  ReactDOM.render(
    React.createElement(
      "div",
      null,
      "Hello react",
      React.createElement("input", null),
      React.createElement("pre", null, new Date().toLocaleTimeString())
    ),
    document.getElementById("mountNode2")
  );
};

setInterval(render, 1000);
