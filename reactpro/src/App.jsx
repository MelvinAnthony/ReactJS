/*      Add content and Button
function MyButton(){
  return (
    <button>
      Button
    </button>
  );
}

export default function Myapp() {
  return(
    <div>
      <h1>Welcome to my app</h1>
      <MyButton/>
    </div>
  );
}
*/


/*  add content and image using url
const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}

*/

/* list items 
const products =[
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

export default function ShoppingList(){
  const listItems = products.map(products =>
    <li
      key = {products.id}
      style = {{
        color: products.isFruit? 'megenta': 'darkgreen'
      }}
      >
        {products.title}

    </li>

  );

  return (
    <ul>{listItems}</ul>
  )
}

*/


/* Button click Counter
import {useState} from 'react';
export default function MyApp(){
  return(
    <div>
      <h1>Counters the update Seperatly</h1>
      <MyButton />
      <MyButton />
    </div>
  );
}


function MyButton(){
  const [count, setCount] = useState(0);

  function handleClick(){
    setCount(count +1);
  }

  return(
    <button onClick={handleClick}>
      Clicked {count} times
    </button>
  );
}

*/


import { useState } from "react";

export default function MyApp(){
  const [count,setCount] = useState(0);

  function handleClick(){
    setCount(count +1);
  }

  return (
    <div>
      <h1>Counters that update togeather</h1>
      <MyButton count = {count} onClick={handleClick} />
      <MyButton count = {count} onClick={handleClick} />

    </div>
  );
}


function MyButton({count,onClick}){
  return(
    <button onClick={onClick}>
      clicked {count} times
    </button>
  );
}