import React from 'react';
import './Discipline.css';
import SheetContext from '../../contexts/SheetContext';
import Fill from '../fill/Fill';
import { withTranslation } from 'react-i18next';

class Discipline extends React.Component {
    static contextType = SheetContext;

    constructor(props, context) {
        super(props, context);
        this.type = "discipline";
        this.name = props.name;
        this.context.createDiscipline(this.type, this.name);

        this.column = parseInt(props.column);
        this.line = parseInt(props.line);

    }

    handleEvent(value, line){
        this.context.changeDisciplinePower(this.type, this.name, line, value);
    }

    createLine(column, line) {
        const bold = {fontWeight: "bold"}
        return (
            <div className={`font-discipline cd${column} ld${line+1}`}>
                <div>
                    <span style={bold}>{line}_____________________</span>
                    <input type="text" className="input_discipline" onChange={e => this.handleEvent(e.target.value, line)} />
                </div>
            </div>
        );
    }

    handleClick(name, value) {
        this.context.changeDiscipline(this.type, name, value);
    }

    dropdownReader(column, line, options) {
        const left = column === 1 ? "dd1" : "dd2";
        return (
            <div className={`font_header cd${column} ld${line} dropdown_base`}>
                <div className="position">
                    <input type="text" className={`discipline_header ${left}`} readOnly value={this.context[this.type][this.name].name} />
                    <div className="dropdown_content">
                    {options.map((item) => (
                        <span key={item} onClick={() => this.handleClick(this.name, item)}>{item}</span>
                    ))}
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { t } = this.props;
        const sum = this.line === 1 ? 0 : 6;
        const line1 = this.createLine(this.column, 1 + sum);
        const line2 = this.createLine(this.column, 2 + sum);
        const line3 = this.createLine(this.column, 3 + sum);
        const line4 = this.createLine(this.column, 4 + sum);
        const line5 = this.createLine(this.column, 5 + sum);
        const d1 = this.dropdownReader(this.column, this.line + sum, t('disciplines:disciplines', { returnObjects: true }));
        return (
            <div>
                <Fill name={this.name} lenght="5" type="discipline" firstFill="false" shape="circle" column={`cwd${this.column}`} line={`lwd${this.line}`} />
                <div className={`font-discipline cd${this.column} ld${this.line + sum} dropdown`}>
                    <div>
                        <span className="line">______________________</span>
                        { d1 }
                    </div>
                </div>
                {line1}
                {line2}
                {line3}
                {line4}
                {line5}
            </div>
        );
    }
}

export default withTranslation()(Discipline);