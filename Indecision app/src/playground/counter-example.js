
let count = 0 ;
const addone =  () => {
count++;
renderCounter();//This is how we can re render the entire page with changes
};
const reset = () => {
    // console.log('Reset');
    count = 0;
    renderCounter();
};

//rerendering using function : BUT THIS IS highly inefficient
//Virtual DOM algorithm helps us identify whose STATE is exactly changing in the page and helps us reload that element
// GOTO Elements in Developers Tool on webpage and see the thing getting highlighted every time we click a button
//Onle part of the H1 needs to be re rendered
const renderCounter = () =>{

    const templateThree = (
        <div>
        <h1>Count : {count}</h1>
        <button id = "some-id" className = "some-class">+1</button>
        
        {/* //Declaring onCLick handler inline  */}
        <button onClick = {() => {
        // console.log("Minus One");
        count--;
        renderCounter();
        }
        }>-1</button>
        <button onClick = {addone}>+1</button>
        <button onClick = {reset}>Reset</button>
        {/* //Class is now a keyword in Javascript, so we use className */} 
        </div>
        
        );
        // console.log(templateThree);
        ReactDOM.render(templateThree, appRoot);
        // takes 2 args : first is JSX that we want to render and id of the dom element where we want to render

};

//Will initialize all elemnts with a particular state nd show the webpage
renderCounter();
