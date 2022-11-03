import axios from "axios";
import React, { useEffect, useState } from "react";

function UseEffect() {
const [data, setData] = useState('')

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data)
        // console.log(response);
      });
  }, []);

  return (
  <div>
     {data.body}
     {data.name}
  </div>
  )
}

export default UseEffect;
