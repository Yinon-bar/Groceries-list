import "./SingleItem.css";
import { FaTrashAlt } from "react-icons/fa";
// import { useState } from "react";

function SingleItem({ data }) {
  const [checked, setChecked] = useState(null);

  function handleItem(e) {
    console.log(e.target);
  }

  return (
    <div className="SingleItem" onClick={handleItem}>
      <div className="Discribe">
        <h3>{data.item}</h3>
        <h3>{data.price} &#8362;</h3>
      </div>
      <FaTrashAlt role="button" />
    </div>
  );
}

export default SingleItem;
