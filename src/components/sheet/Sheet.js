import React from 'react';
import './Sheet.css';
import Background from '../background/Background';
import Header from '../header/Header';
import Ability from '../ability/Ability';
import Skill from '../skill/Skill';

class Sheet extends React.Component {
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