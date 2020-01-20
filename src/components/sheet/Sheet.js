import React from 'react';
import './Sheet.css';
import Background from '../background/Background';
import Header from '../header/Header';
import Ability from '../ability/Ability';
import Skill from '../skill/Skill';

class Sheet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: "Força"};
    }

    

    render() {
        return (
            <div className="page_size_complete page_shadow">
                <Background />
                <Header />
                <Ability />
                <Skill />
            </div>
        );
    }
}

export default Sheet;