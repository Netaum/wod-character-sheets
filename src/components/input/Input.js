import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
        };
    }

    handleEvent(event){
        this.setState({value: event.target.value});
    }

    inputReader() {
        return (
            <div className={`font-header ${this.props.column} ${this.props.line}`}>
                <div className="position">
                    <span>{this.props.name}:</span>
                    <input type="text" className="input_header" onChange={this.handleEvent.bind(this)} />
                </div>
            </div>
        );
    }

    handleClick(value) {
        console.log(value.item);
        this.setState({value: value.item});
    }

    dropdownReader() {
        return (
            <div className={`font-header ${this.props.column} ${this.props.line} dropdown-base`}>
                <div className="position">
                    <span>{this.props.name}:</span>
                    <input type="text" className="input_header input_header_short input-dropdown" readOnly value={this.state.value} />
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
        if(this.props.type === 'input'){
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