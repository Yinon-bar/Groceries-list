import "./Content.css";
import useFetch from "../Hooks/useFetch";
import ItemList from "../ItemList/ItemList";

function Content() {
  const data = useFetch("http://localhost:3004/items");

  return (
    <div className="Content">
      <div className="Container">
        <ItemList data={data} />
      </div>
    </div>
  );
}

export default Content;
