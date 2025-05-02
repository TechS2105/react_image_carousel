import React from 'react';
import '../../public/style/image.css';

function Images(props) {
    return (
        <div className="imageClass">
            <img src={props.image} alt={props.alt || 'Image'} />
        </div>
    );
}

export default Images;