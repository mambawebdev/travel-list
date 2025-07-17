

export default function Item({ item, onDeleteItem, onToggleItems }) {
  return <li>
    {/* a checkbox will need a boolean data type to be able to change it's state */}
    <input type="checkbox" value={item.packed} onChange={() => onToggleItems(item.id)} />
    <span style={item.packed ? { textDecoration: "line-through" } : {}}>
      {item.quantity} {item.description}
    </span>
    <button onClick={() => onDeleteItem(item.id)}>❌</button>
  </li>;
}
