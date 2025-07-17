import { useState } from "react";
import Item from "./Item";

export default function PackingList({ items, onDeleteItem, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("packed");

  // using derived state that should not manipulate the original array 
  // sorting the array computed based on the initial array
  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  // using the localeCompare method to sort alphabetically
  if (sortBy === "description") sortedItems = items.slice().sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed") sortedItems = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {/* Instead of rendering the initial items array we will map through the sortedItems */}
        {sortedItems.map((item) => (
          <Item key={item.id} onDeleteItem={onDeleteItem} onToggleItems={onToggleItems} item={item} />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
