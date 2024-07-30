/*Why React?
    1- it's Composable
        composability => it goes quite a bit deeper
        we will make our components mush more composable and reusable
    2- it's Declarative means what should be done?
        like I tell him what to do and don't worry about the details OF HOW TO GET IT DONE
        declarative => it makes our code more readable
        we will write less code and focus on what the UI should look like
        imperative => how should it be done 
        describe to me every step on how to do something, and i will do it
*/

const h1Element = document.createElement('h1');
h1Element.textContent = 'Hello, React!';
h1Element.className = 'header';
//const rootDiv = document.getElementById('root');
//rootDiv.appendChild(h1Element);
document.getElementById('root').append(h1Element);