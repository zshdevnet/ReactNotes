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
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
