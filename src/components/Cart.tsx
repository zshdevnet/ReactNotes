import { memo } from 'react';

interface Props {
    cartItems: string[];
    onClear: () => void;
}

const Cart = ({cartItems, onClear}: Props) => {
  return (
    <>
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => <li key={item}>{item}</li>)}
      </ul>
      <button onClick={onClear}>Clear</button>
    </div>
    </>
  );
};

export default memo(Cart);