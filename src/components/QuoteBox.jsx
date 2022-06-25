import React from 'react';
import Button from './Button';

const QuoteBox = ({quoteRandom,setQuote, quotes, bg}) => {

    const { quote , author } = quoteRandom

    return (
        <div className='card'>
                <h1> 
                    <i className='bx bxs-quote-alt-left bx-md'></i> {quote}
                </h1>
            <p className='author'><i className='bx bxs-user bx-sm' ></i> {author}</p>
            <Button setQuote={setQuote} quotes={quotes} bg={bg}/>
        </div>
    );
};

export default QuoteBox;