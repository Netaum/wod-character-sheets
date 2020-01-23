import React from 'react';
import './Text.css';

function Text(props) {
    let fill = props.name;
    if(props.repeatChar !== undefined)
    {
        const lineLenght = parseInt(props.lineLenght);
        const charsToFill = lineLenght - fill.length;
        fill = `${fill} ${props.repeatChar.repeat(charsToFill)}`;
    }
    return(
        <div className={`${props.type} ${props.column} ${props.line}`}>
            <div className="position">
                <span>{fill}</span>
            </div>
        </div>
    );
}

export default Text;