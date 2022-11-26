import "./AddItem.css";
import { FaPlus } from "react-icons/fa";

function AddItem() {
  return (
    <div className="AddItem">
      <form>
        <label>
          <input type="text" defaultValue={"Add item"} required />
        </label>
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
}

export default AddItem;
