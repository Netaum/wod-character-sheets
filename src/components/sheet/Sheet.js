import React from 'react';
import './Sheet.css';
import Background from '../background/Background';
import Header from '../header/Header';
import Ability from '../ability/Ability';
import Skill from '../skill/Skill';
import Labels from '../labels/Labels';
import Dicipline from '../discipline/Discipline';

class Sheet extends React.Component {
    render() {
        return (
            <div className="page_size_complete page_shadow">
                <Background />
                <Header />
                <Ability />
                <Skill />
                <Labels />
                <Dicipline name="discipline1" column="1" line="1" />
                <Dicipline name="discipline2" column="2" line="1" />
                <Dicipline name="discipline3" column="1" line="2" />
            </div>
        );
    }
}

export default Sheet;