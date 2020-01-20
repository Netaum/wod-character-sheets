import React from 'react';
import Text from '../text/Text';
import Fill from '../fill/Fill';

function Ability() {
    return (
        <div>
            <Text name="Strength" type="font-ability" column="c1" line="l4" />
            <Fill name="str" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa1" line="lwa1"/>

            <Text name="Charisma" type="font-ability" column="c2" line="l4" />
            <Fill name="cha" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa2" line="lwa1"/>

            <Text name="Intelligence" type="font-ability" column="c3" line="l4" />
            <Fill name="int" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa3" line="lwa1"/>

            <Text name="Dexterity" type="font-ability" column="c1" line="l5" />
            <Fill name="dex" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa1" line="lwa2"/>

            <Text name="Manipulation" type="font-ability" column="c2" line="l5" />
            <Fill name="man" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa2" line="lwa2"/>

            <Text name="Wits" type="font-ability" column="c3" line="l5" />
            <Fill name="wit" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa3" line="lwa2"/>

            <Text name="Stamina" type="font-ability" column="c1" line="l6" />
            <Fill name="sta" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa1" line="lwa3"/>

            <Text name="Composure" type="font-ability" column="c2" line="l6" />
            <Fill name="com" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa2" line="lwa3"/>

            <Text name="Resolve" type="font-ability" column="c3" line="l6" />
            <Fill name="res" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa3" line="lwa3"/>

        </div>
    );
}

export default Ability;