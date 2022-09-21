import React, { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const Api = "https://hp-api.herokuapp.com/api/characters";

  const [harry, setHarry] = useState([]);

  useEffect(() => {
    axios.get(Api).then((response) => {
      console.log(response.data);
      setHarry(response.data.slice(0, 25));
    });
  }, [Api]);

  return (
    <div>
      {harry.map((item) => (
        <div>
          <h1>{item.name}</h1>
          <img src={item.image} alt={item.name} />
          <h2>{item.house}</h2>
          <h3>{item.dateOfBirth}</h3>
        </div>
      ))}
    </div>
  );
}
