import React from 'react'; //this is required because JSX is converted to react.createElement calls
import Option from './Option'

//Making Options a stateless component
const Options = (props) =>
{
    return(
        <div>
        
        <button onClick={props.handleDeleteAllOptions}>Remove All</button>
        {props.options.length === 0 && <p>Add an option to get started!</p>}
        {props.options.map((option) => (
            <Option key={option} 
            optionText = {option}
            handleDeleteAllOption = {props.handleDeleteAllOption}
            />
         ))
        }   
        </div>
    );
}

export default Options;