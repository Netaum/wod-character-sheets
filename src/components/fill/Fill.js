import React from 'react';
import './Fill.css';

class Fill extends React.Component {
    constructor(props) {
        super(props);

        let firstFill = props.firstFill === "true";
        let initialValue = firstFill ? 1 : 0;
        this.len = parseInt(props.lenght);

        if (props.type === "attribute")
            this.type = "wod-attribute";
        else if (props.type === "skill")
            this.type = "wod-skill";
        else this.type = "wod-spendable";

        this.state = {
            values: Array(this.len),
            value: initialValue,
            firstFill: firstFill
        };

        this.state.values = this.fillArray(this.len, -1, false, firstFill);

        if (props.shape === "circle") {
            this.fillChar = "e";
            this.emptyChar = "d";
        } else {
            this.fillChar = "f";
            this.emptyChar = "a";
        }
    }

    fillArray(len, index, indexState, firstFill) {
        let values = Array(len);
        for (let i = 0; i < len; i++) {
            if (i === 0 && firstFill === true)
                values[i] = true;
            else if (i === index)
                values[i] = !indexState;
            else
                values[i] = index >= i ? true : false;
        }

        return values;
    }

    handleClick(index) {

        let state = this.state.values[index];
        let values = this.fillArray(this.len, index, state, this.state.firstFill);
        let value = values.reduce((total, i) => total + (i === true ? 1 : 0));
        this.setState({
            values: values,
            value: value
        });
    }

    item(index, value) {
        return (
            <span key={index} vl={index} onClick={() => this.handleClick(index)}>{value === true ? this.fillChar : this.emptyChar}</span>
        );
    }

    line(position) {
        return (
            <span id={this.props.name} className={`wod ${this.type} ${position}`}>
                {this.state.values.map((e, i) => (
                    this.item(i, e)
                ))}
            </span>
        );
    }

    space(index) {
        let space;
        if(index === 4)
            space = <span key="space"> </span>
        return (
            space
        );
    }

    render() {
        let position;
        if (this.props.position !== undefined)
            position = this.props.position;
        else position = `${this.props.column} ${this.props.line}`;

        return (
            <div>
                {this.line(position)}
            </div>
        );
    }
}

export default Fill;