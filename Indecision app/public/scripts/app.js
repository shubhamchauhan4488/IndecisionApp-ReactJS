'use strict';

console.log("This is coming from app.js");

//This is JSX : Javascript XML
//We inserted div beacuse the adjacent JSX cannot occur, it needs to be placed under one root element
var app = {
    title: 'Indecision',
    subtitle: 'Some Subtitle',
    options: []
};

var onAddClick = function onAddClick(e) {
    e.preventDefault(); //avoid reloading of entire page
    var val = e.target.elements.option.value; //where e.target refers to the the form as form is the target of the clicking event
    if (val) {
        app.options.push(val);
        e.target.elements.option.value = '';
        renderapp();
    }
};
var onRemoveAllClick = function onRemoveAllClick() {
    app.options = [];
    renderapp();
};

var renderapp = function renderapp() {

    var temp = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            'Put your life in the hands of the computer'
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are you options' : 'No options to display'
        ),
        React.createElement(
            'button',
            { disabled: app.options.length === 0, onClick: decisionMaker },
            'What should I do?'
        ),
        React.createElement(
            'button',
            { onClick: onRemoveAllClick },
            'Remove All'
        ),
        React.createElement(
            'ol',
            null,
            //Rendering JSX inside JSX , It is necessary to give the key for React to keep track of the elements 
            //By using mao function we have mapped the string to the JSX inside the options array
            app.options.map(function (item) {
                return React.createElement(
                    'li',
                    { key: item },
                    item
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onAddClick },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add item'
            )
        )
    );
    ReactDOM.render(temp, appRoot);
};
var appRoot = document.getElementById("main-div");
renderapp();

// var username = 'Shubham';
// var userlocation = 'Gurgaon';
// var age = 26;

//Making an object instead of individual variables 
// const tempTwo = {
//     //try commenting the code
//     username : 'Shubham',
//     userlocation  : 'Gurgaon',
//     age : 20
// };

// function getLocation(location){
// if(location){
//     return <p>Location : {location}</p>
// }else{
//     return 'Location is Unknown'
// }

// }
// const templateTwo = (
//     <div>
//         {/* Using conditional rendering */}
//         {/* //Ternary operator used when we have to do choose b/w 2 things */}
//         <h1>{(tempTwo.username) ? tempTwo.username : 'Anonymous'} </h1>
//         {(tempTwo.age && tempTwo.age>=18) && <p> Age : {tempTwo.age}</p>}
//         {getLocation(tempTwo.userlocation)}
//     </div>

// );
