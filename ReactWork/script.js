const parent = document.getElementById("root");
console.dir(parent);
const root = ReactDOM.createRoot(parent);
// const h2 = React.createElement("h2", {style:{color:'cyan'}}, "Hello React JS");

// const li1 = React.createElement("li", {}, "Orange");
// const li2 = React.createElement("li", {}, "Apple");
// const ul = React.createElement("ul", {}, li1, li2);
// const div = React.createElement("div", {style:{backgroundColor: 'orange'}}, h2, ul);
const div = React.createElement("h2", {}, "Heading tag");
const h21 = <h2>Hello JSX in JS</h2>;

const li1 = <li>Orange</li>
const li2 = <li>Apple</li>
const li3 = <li>Banana</li>
const li4 = <li>Berry</li>
const ul = <ul style={{color:'red'}}>{li1}{li2}{li3}{li4}</ul>

const container = (
<div>
        <div><h2>Welcome to Web-Development Application</h2></div>
        <div>{ul}</div>
        <div>{h21}</div>
    
</div>
);

root.render(container);