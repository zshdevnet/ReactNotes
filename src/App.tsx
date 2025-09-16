//import Button from "./components/Button";
//import Alert from "./components/Alert";
import { useState } from "react";
import ListGroup from "./components/ListGroup";
import './App.css';

/*
function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My Button
      </Button>
    </div>
  );
} */
function App() {
  let items = [
    "Dushanbe",
    "Kulob",
    "Khujand",
    "Qurghon"
  ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  
  return (
    <div>
    <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}


export default App;
