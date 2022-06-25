import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import QuoteBox from "./components/QuoteBox";
import quotes from './quotes.json';

function App() {

    const longitud = quotes.length
    const random =  Math.floor ( Math.random() * longitud);
    const [quoteRandom, setQuote] = useState( quotes[random] );


    return (
        <div className="App">
            <QuoteBox quoteRandom={quoteRandom} setQuote={setQuote} quotes={quotes}/>
        </div>
    );
}

export default App;
