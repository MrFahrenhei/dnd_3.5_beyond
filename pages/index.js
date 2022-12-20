import React, { useEffect, useState } from "react"
import api from "./api/api.js";

export default function App(){
    const [author, title] = useState();

    useEffect(() => {
        api
          .get("/author/William Shakespeare")
          .then((response) => setUser(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    return (
        <div className="App">
            <p>Autores: {author}</p>
            <p>Obras: {title}</p>
        </div>
    )
}
