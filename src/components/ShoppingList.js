import { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [category, setCategory] = useState("all");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
  };

  const filteredItems = category === "all" ? items : items.filter(item => item.category === category);

  return (
    <div>
      <Filter onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
