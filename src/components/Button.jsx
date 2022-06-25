import React from "react";

const Button = ({ setQuote, quotes, bg}) => {



    const nextQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);

    };

    return (
        <button className="next" 
                onClick={ nextQuote }
                style={{background:bg}} >
            <i className="bx bx-chevron-right bx-md"></i>
        </button>
    );
};

export default Button;
