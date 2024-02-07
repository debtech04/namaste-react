// const heading = React.createElement("h1", {id : "heading"}, "Hello React !");

// const parent = React.createElement("div", {id:"parent"}, React.createElement("div", {id : "child"}, [React.createElement("h1", {id : "heading"}, "Hello React H1 !"), React.createElement("h2", {id : "heading"}, "Hello React H2 !")]))
const parent = React.createElement("div", {id:"parent"}, [React.createElement("div", {id : "child1"}, "Hello React !"), React.createElement("div", {id : "child2"}, "Hello React !")])


const root  = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);