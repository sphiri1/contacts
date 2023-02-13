import React from 'react';
import Card from './Card';


//props never change ({robots is a prop})
//state is an object that describes an application 
//state is able to change
//prop is a child of state

const CardList = ({robots}) => {

    return(
        <div> 
                {
            robots.map((user, i) =>{
            return  <Card 
                key={i} 
                id={robots[i].id}
                name={robots[i].name}
                email={robots[i].email}
                />
            })
        }
      </div>
      
    )
}

export default CardList;