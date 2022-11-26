import "./AddItem.css";
import { FaPlus } from "react-icons/fa";
import { useState } from "react";

function AddItem() {
  const [itemTxt, setItemTxt] = useState("");

  function handleClick(e) {
    e.preventDefault();
    setItemTxt(e.target.value);
  }

  return (
    <div className="AddItem">
      <form>
        <label>
          <input
            onChange={handleClick}
            value={itemTxt}
            type="text"
            placeholder="Add item"
            // defaultValue={"Add item"}
            required
          />
        </label>
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

export default AddItem;
