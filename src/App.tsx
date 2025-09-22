import { useState } from "react";

function App() {
  
  const [Cart, setCart] = useState({
    discount: .1,
    items: [
      {id: 1, title: 'Product 1', quantity: 1},
      {id: 2, title: 'Product 2', quantity: 1},
    ]
  });

  const handleClick = () => {
    setCart({...Cart, items: Cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity+1} : item)})
  }
  return(
    <>
    <div>
      <button onClick={handleClick}>Click here</button>
    </div>
    </>
  );
}

export default App;