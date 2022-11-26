import SingleItem from "../SingleItem/SingleItem";
import "./ItemList.css";

function ItemList({ data }) {
  return (
    <div className="ItemList">
      {data.map((item) => (
        <SingleItem key={item.id} data={item} />
      ))}
    </div>
  );
}

export default ItemList;
