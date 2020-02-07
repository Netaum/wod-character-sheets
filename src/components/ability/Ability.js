import React from 'react';
import Text from '../text/Text';
import Fill from '../fill/Fill';
import { useTranslation } from 'react-i18next';

function Ability() {
    const { t } = useTranslation();
    return (
        <div>
            <Text name={t('ability:strength')} type="font-ability" column="c1" line="l4" />
            <Fill name="strength" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa1" line="lwa1"/>

            <Text name={t('ability:charisma')} type="font-ability" column="c2" line="l4" />
            <Fill name="charisma" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa2" line="lwa1"/>

            <Text name={t('ability:intelligence')} type="font-ability" column="c3" line="l4" />
            <Fill name="intelligence" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa3" line="lwa1"/>

            <Text name={t('ability:dexterity')} type="font-ability" column="c1" line="l5" />
            <Fill name="dexterity" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa1" line="lwa2"/>

            <Text name={t('ability:manipulation')} type="font-ability" column="c2" line="l5" />
            <Fill name="manipulation" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa2" line="lwa2"/>

            <Text name={t('ability:wits')} type="font-ability" column="c3" line="l5" />
            <Fill name="wits" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa3" line="lwa2"/>

            <Text name={t('ability:stamina')} type="font-ability" column="c1" line="l6" />
            <Fill name="stamina" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa1" line="lwa3"/>

            <Text name={t('ability:composure')} type="font-ability" column="c2" line="l6" />
            <Fill name="composure" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa2" line="lwa3"/>

            <Text name={t('ability:resolve')} type="font-ability" column="c3" line="l6" />
            <Fill name="resolve" lenght="5" type="attribute" firstFill="true" shape="circle" column="cwa3" line="lwa3"/>

            <Fill name="health" lenght="10" type="expendable" firstFill="false" shape="square" column="cwa4" line="lwa4"/>
            <Fill name="willpower" lenght="10" type="expendable" firstFill="false" shape="square" column="cwa5" line="lwa4"/>
        </div>
    );
}

export default Ability;