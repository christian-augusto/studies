
import React from "react";

export default props => (
  <div>
    <h1>{props.valor}</h1>
    <h2>{props.aBcD}</h2>
    <p>{1+2}</p>
    <p>{Math.random()}</p>
  </div>
);

// export default () => (
//   <h1>Primeiro Componente</h1>
// );

// export default function() {
//   return <h1>Primeiro Componente</h1>;
// };

// function primeiro() {
//   return <h1>Primeiro Componente</h1>;
// }

// export default primeiro;