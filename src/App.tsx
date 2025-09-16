import ListGroup from "./components/LsitGroup";

function App() {
  let items = [
    "Dushanbe",
    "Khorugh",
    "Gulbutta",
    "Sakhobvat",
    "Korvon",
    "Kulob",
  ];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
