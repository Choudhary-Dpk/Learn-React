const heading1 = React.createElement("h1", {}, "Namaste Duniya by @React! ...1");
const heading2 = React.createElement("h2", {}, "Namaste Duniya by @React! ...2");
const container = React.createElement("div", { className: "container" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, container)
// React element(heading) is an object.
//     {
//         "type": "h1",
//             "key": null,
//                 "ref": null,
//                     "props": {
//             "children": "Namaste Duniya by @React!"
//         },
//         "_owner": null,
//             "_store": { }
// }
// console.log(container);
// console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);

// console.log(parent);
// console.log(root);