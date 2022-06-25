import React from 'react';
import Button from './Button';

const QuoteBox = ({quoteRandom,setQuote, quotes}) => {

    const { quote , author } = quoteRandom

    return (
        <div className='card'>
            <h1>{quote}</h1>
            <p>{author}</p>
            <Button quoteRandom= {quote} setQuote={setQuote} quotes={quotes} />
        </div>
    );
};

export default QuoteBox;