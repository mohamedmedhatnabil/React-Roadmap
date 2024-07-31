export default function MyButton() {
   const handleClick = handleClick => alert('You clicked me!');


  return (
    <button onClick={handleClick}>
      Click me
    </button>
  );
}