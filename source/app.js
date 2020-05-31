const App = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h1", {}, "Sanjana") //second argument
    );
};

ReactDOM.render(
    React.createElement(App),
    document.getElementById("root")
);