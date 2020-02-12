import React from 'react';
import './Input.css';
import SheetContext from '../../contexts/SheetContext'

class Input extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);
        this.context.createHeader(props.type, props.name, "");
        const size = parseInt(props.textSize);
        this.size = isNaN(size) ? 120 : size;

    }

    handleEvent(event){
        const props = this.props;
        this.context.changeHeader(props.type, props.name, event.target.value);
    }

    inputReader() {
        return (
            <div className={`font-header ${this.props.column} ${this.props.line}`}>
                <div className="position">
                    <span>{this.props.name}:</span>
                    <input type="text" className="input_header" style={{width: this.size + "px"}} onChange={this.handleEvent.bind(this)} />
                </div>
            </div>
        );
    }

    handleClick(value) {
        const props = this.props;
        this.context.changeHeader(props.type, props.name, value.item);
    }

    dropdownReader() {
        const props = this.props;
        return (
            <div className={`font-header ${this.props.column} ${this.props.line} dropdown-base`}>
                <div className="position">
                    <span>{this.props.name}:</span>
                    <input type="text" className="input_header input_header_short input-dropdown" readOnly value={this.context[props.type][props.name].value} />
                    <div className="dropdown-content">
                    {this.props.options.map((item) => (
                        <span key={item} onClick={() => this.handleClick({item})}>{item}</span>
                    ))}
                    </div>
                </div>
            </div>
        );
    }
    
    render() {
        let input;
        if(this.props.mode === 'input'){
            input = this.inputReader();
        }
        else {
            input = this.dropdownReader();
        }

        return (
            input
        );
    }
}

export default Input;