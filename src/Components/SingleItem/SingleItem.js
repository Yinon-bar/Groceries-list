import "./SingleItem.css";
import { FaTrashAlt } from "react-icons/fa";

function SingleItem({ data }) {
  return (
    <div className="SingleItem">
      <div className="Discribe">
        <h3>{data.item}</h3>
        <h3>{data.price} &#8362;</h3>
      </div>
      <FaTrashAlt role="button" />
    </div>
  );
}

export default SingleItem;
