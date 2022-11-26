import "./Content.css";
import { FaTrashAlt } from "react-icons/fa";
import useFetch from "../Hooks/useFetch";

function Content() {
  const data = useFetch("http://localhost:3004/items");

  return (
    <div className="Content">
      <div className="Container">
        <h2>Content</h2>
        <ul>
          {data.map((item) => (
            <h2 key={item.id}>{item.item}</h2>
          ))}
          <FaTrashAlt role="button" />
        </ul>
      </div>
    </div>
  );
}

export default Content;
