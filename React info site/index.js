/*JSk stands for => JavaScript XML
    a flavor of html into javascript
 react builds with jsx just old javascript objects
    and those objects descripe the dom elemetn that we
    want react to put onto the page for us
 in JSX i can't render more than two parent elements (like h1 and p)
    together i have to wrap them in like a div

*/

const element = <h1 className="header">This is JSX</h1>;
console.log(element);
/*{type: "h1", key: null, ref: null, props: {className: "header",
 children: "This is JSX"}, _owner: null, _store: {}}
 it's a javascript object
*/
ReactDOM.render(element, document.getElementById("root"));


const nav = (
    <nav>
        <h1>website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>  
);
ReactDOM.render( 
    nav,
    document.getElementById("root")
);