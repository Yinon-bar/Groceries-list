import { useEffect, useState } from "react";

function useFetch(url) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => setItems(data));
  }, [url]);

  return items;
}

export default useFetch;
