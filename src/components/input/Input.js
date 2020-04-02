import React from 'react';
import './Input.css';
import SheetContext from '../../contexts/SheetContext'

class Input extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);
        if(props.type === "discipline") {
            this.showHeader = false;
            this.context.createDiscipline(props.type, props.name);
        }
        else {
            this.showHeader = true;
            this.context.createHeader(props.type, props.name, "");
        }
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

    dropdownReaderWithHeader() {
        return (
            <div className={`font-header ${this.props.column} ${this.props.line} dropdown-base`}>
                <div className="position">
                    <span>{this.props.name}:</span>
                    <input type="text" className="input_header input_header_short input-dropdown" readOnly value={this.context[this.props.type][this.props.name].value} />
                    <div className="dropdown-content">
                    {this.props.options.map((item) => (
                        <span key={item} onClick={() => this.handleClick({item})}>{item}</span>
                    ))}
                    </div>
                </div>
            </div>
        );
    }

    dropdownReader() {
        return (
            <div className={`font-header ${this.props.column} ${this.props.line} dropdown-base`}>
                <div className="position">
                    <input type="text" className="input_header input_header_short input-dropdown" readOnly value={this.context[this.props.type][this.props.name].value} />
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
        else if(!this.showHeader) {
            input = this.dropdownReader();
        }
        else {
            input = this.dropdownReaderWithHeader();
        }

        return (
            input
        );
    }
}

export default Input;