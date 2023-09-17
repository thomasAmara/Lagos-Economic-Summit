import React, { useState } from 'react';
import './Truncate.css'

// const TextTruncate = ({ text, maxLength }) => {
// const [isTruncated, setIsTruncated] = useState(true);

// const toggleTruncate = () => {
//     setIsTruncated(!isTruncated);
// };

// return (
//     <div>
//     {isTruncated ? (
//         <p>{text.slice(0, maxLength)}...</p>
//     ) : (
//         <p>{text}</p>
//     )}
//     <button className='Shorten-btn' onClick={toggleTruncate}>
//         {isTruncated ? 'Show More' : 'Show Less'}
//     </button>
//     </div>
// );
// };

// export default TextTruncate;

const TextTruncate = ({ text, maxLength }) => {
    const [isTruncated, setIsTruncated] = useState(true);
    const toggleTruncate = () => {
    setIsTruncated(!isTruncated);
    };

    const truncatedText = isTruncated ? text.slice(0, maxLength) + '...' : text;
    return (
    <div className="text-truncate">
        <p dangerouslySetInnerHTML={{ __html: truncatedText.replace(/\n/g, '<br />') }} />
        <button className="read-more-button" onClick={toggleTruncate}>
        {isTruncated ? 'Show More' : 'Show Less'}
        </button>
    </div>
    );
};

export default TextTruncate; 
