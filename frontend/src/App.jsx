import React from "../node_modules/react";
import { useId } from "../node_modules/react";

const App = () => {
  let id = useId();
  return (
    <div>
      <h1 key={id}>Hello World, key: {id} (useId hook)</h1>
    </div>
  );
};

export default App;
