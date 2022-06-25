import React from "react";

const Button = ({ setQuote, quotes}) => {



    const nextQuote = () => {
        const random = Math.floor(Math.random() * quotes.length);
        setQuote(quotes[random]);

    };

    return (
        <button className="next" onClick={ nextQuote }>
            <i className="bx bx-chevron-right bx-md"></i>
        </button>
    );
};

export default Button;
