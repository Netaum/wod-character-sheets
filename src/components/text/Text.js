import React from 'react';
import './Text.css';

function Text(props) {
    return(
        <div className={`${props.type} ${props.column} ${props.line}`}>
            <div className="position">
                <span>{props.name}</span>
            </div>
        </div>
    );
}

export default Text;