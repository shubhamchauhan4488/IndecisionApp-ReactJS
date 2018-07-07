import React from 'react'
//Making Header a stateless functional component
const Header = (props) =>
{
    return (
        <div> 
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
        );
}
Header.defaultProps = {
    title : 'Indecision' //Setting the default valu of the title    
}

export default Header;