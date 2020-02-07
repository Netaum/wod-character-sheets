import React from 'react';
import './Fill.css';
import SheetContext from '../../contexts/SheetContext';

class Fill extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);
        this.len = parseInt(props.lenght);

        if (props.type === "attribute")
            this.type = "wod-attribute";
        else if (props.type === "skill")
            this.type = "wod-skill";
        else this.type = "wod-spendable";

        if (props.shape === "circle") {
            this.fillChar = "e";
            this.emptyChar = "d";
        } else {
            this.fillChar = "a";
            this.emptyChar = "f";
        }

        this.context.createField(props.type, props.name, this.len, props.firstFill === "true" ? 1 : 0);
    }
    handleClick(index) {
        const props = this.props;
        this.context.update(props.type, props.name, index);
    }

    item(index, value) {
        return (
            <span key={index} vl={index} onClick={() => this.handleClick(index)}>{value === true ? this.fillChar : this.emptyChar}</span>
        );
    }

    line(position) {
        const props = this.props;
        const values = this.context[props.type][props.name].fill;
        return (
            <span id={this.props.name} className={`wod ${this.type} ${position}`}>
                {values.map((e, i) => (
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