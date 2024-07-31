import { useState } from 'react';
export default function MyButton() {
   const [count, setCount] = useState(0);
   const handleClick = handleClick => setCount(count+1);
   const restartCount = restartCount => setCount(0);


  return (
    <div>
      <button onClick={handleClick}>
        Number Of Clicks Is {count}
      </button>
      <button onClick={restartCount}>
        Restart Count
      </button>
    </div>
    
  );
}