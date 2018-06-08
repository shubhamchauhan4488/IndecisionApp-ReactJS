console.log("This is coming from app.js");

//This is JSX : Javascript XML
//We inserted div beacuse the adjacent JSX cannot occur, it needs to be placed under one root element
const app = {
    title : 'SomeTitle',
    subtitle : 'Some Subtitle',
    options : ['one', 'two'] 
};
const temp = (
    <div>
        <h1>{app.title}</h1>
       {(app.subtitle) && <p>Here is the subtitle</p>}
       <p>{(app.options.length > 0 ) ? 'Here are you options' : 'No options to display'}</p>
        <ol>
            <li>Mango</li> 
            <li>Bananas</li>
        </ol>
    </div>
);

// var username = 'Shubham';
// var userlocation = 'Gurgaon';
// var age = 26;

//Making an object instead of individual variables 
const tempTwo = {
    //try commenting the code
    username : 'Shubham',
    userlocation  : 'Gurgaon',
    age : 20
};

function getLocation(location){
if(location){
    return <p>Location : {location}</p>
}else{
    return 'Location is Unknown'
}

}
const templateTwo = (
    <div>
        {/* Using conditional rendering */}
        {/* //Ternary operator used when we have to do choose b/w 2 things */}
        <h1>{(tempTwo.username) ? tempTwo.username : 'Anonymous'} </h1>
        {(tempTwo.age && tempTwo.age>=18) && <p> Age : {tempTwo.age}</p>}
        {getLocation(tempTwo.userlocation)}
    </div>

);
const appRoot = document.getElementById("main-div");

ReactDOM.render(temp, appRoot);
// takes 2 args : first is JSX that we want to render and id of the dom element where we want to render
