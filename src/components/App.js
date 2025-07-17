import { useState } from "react";
import Logo from './Logo'
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";


/* const initialItems = [
  {
    id: 1,
    description: "Passports",
    quantity: 2,
    packed: true
  },
  {
    id: 2,
    description: "Socks",
    quantity: 12,
    packed: false
  },
  {
    id: 3,
    description: "Charger",
    quantity: 1,
    packed: false
  },
] 

A controlled element means that the element has the value defined by a state (Creating a new piece of state)
and it also has an event handler which listens for the change
which in turn updates the state accordingly. 

Using derived state to calculate the number of items on the list, how many we already have packed and then the percentage of that.
Using derived state to sort the items in the list
*/


export default function App() {
  const [items, setItems] = useState([]);
  
  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }

  // Each item has an 'id' which we will delete with this event listener 
  function handleDeleteItem(id) {
    // When item.id !== id is true, the item will end up in array
    // When item.id === id, then that element will be deleted from state / array
    setItems(items => items.filter(item => item.id !== id));
  }

  function handleToggleItem(id){
    setItems(items => items.map(item => item.id === id ? {...item, packed: !item.packed} : item));
  }

  function handleClearList(){
    const confirmed = window.confirm("Are you sure you want to delete your items?")
    if(confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo/>
      <Form onAddItems={handleAddItems}/>
      <PackingList items={items} onDeleteItem={handleDeleteItem} onToggleItems={handleToggleItem} onClearList={handleClearList}/>
      <Stats items={items}/>
    </div>
  )
}

