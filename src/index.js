import React, {useState} from 'react';
import {createRoot} from 'react-dom/client'
import {Can, PermissionContext} from "./lib";

const App = () => {
  const [permissions, setPermissions] = useState([]);

  setTimeout(() => {
    setPermissions([10, 40, 50, 60]);
  }, 1000);

  return (
    <PermissionContext.Provider value={permissions}>
      <div style={{width: 640, margin: "15px auto"}}>
        <Can permission={10}>
          <h1>Hello React</h1>
        </Can>
      </div>
    </PermissionContext.Provider>
  );
}
export default App;

createRoot(document.getElementById("root")).render(<App/>)
