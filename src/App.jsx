import { useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from './quotes.json';

function App() {

    const colors = ["#845EC2" ,"#D65DB1","#FF6F91" , "#926C00", "#FF9671" ,"#4B4453","#4D8076", "#0089BA","#00C9A7"]

    const longitud = quotes.length
    const random =  Math.floor ( Math.random() * longitud);
    const [quoteRandom, setQuote] = useState( quotes[random] );
    const bg = colors[ Math.floor(Math.random() * colors.length )]


    return (
        <div className="App" style={ { background : bg , color: bg}}>
            <QuoteBox quoteRandom={quoteRandom} setQuote={setQuote} quotes={quotes} bg={bg}/>
        </div>
    );
}

export default App;
