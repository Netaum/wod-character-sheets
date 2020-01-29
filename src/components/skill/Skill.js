import React from 'react';
import Text from '../text/Text';
import Fill from '../fill/Fill';
import { useTranslation } from 'react-i18next';

function Skill() {
    const { t } = useTranslation();
    return (
        <div>
            <Text name={t('skill:athletics')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk1" />
            <Fill name="ath" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk1"/>

            <Text name={t('skill:brawl')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk2" />
            <Fill name="brawl" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk2"/>

            <Text name={t('skill:craft')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk3" />
            <Fill name="craft" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk3"/>

            <Text name={t('skill:drive')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk4" />
            <Fill name="drive" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk4"/>

            <Text name={t('skill:firearms')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk5" />
            <Fill name="firearms" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk5"/>

            <Text name={t('skill:larceny')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk6" />
            <Fill name="larceny" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk6"/>

            <Text name={t('skill:melee')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk7" />
            <Fill name="melee" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk7"/>

            <Text name={t('skill:stealth')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk8" />
            <Fill name="stealth" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk8"/>

            <Text name={t('skill:survival')} repeatChar="." lineLenght="40" type="font-skill" column="ck1" line="lk9" />
            <Fill name="survival" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk9"/>


            <Text name={t('skill:animalKen')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk1" />
            <Fill name="ananimalKenk" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk1"/>

            <Text name={t('skill:etiquette')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk2" />
            <Fill name="etiquette" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk2"/>

            <Text name={t('skill:insight')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk3" />
            <Fill name="insight" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk3"/>

            <Text name={t('skill:intimidation')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk4" />
            <Fill name="intimidation" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk4"/>

            <Text name={t('skill:leadership')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk5" />
            <Fill name="leadership" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk5"/>

            <Text name={t('skill:performance')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk6" />
            <Fill name="performance" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk6"/>

            <Text name={t('skill:persuasion')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk7" />
            <Fill name="prs" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk7"/>

            <Text name={t('skill:streetwise')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk8" />
            <Fill name="streetwise" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk8"/>

            <Text name={t('skill:subterfuge')} repeatChar="." lineLenght="40" type="font-skill" column="ck2" line="lk9" />
            <Fill name="subterfuge" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk9"/>


            <Text name={t('skill:academics')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk1" />
            <Fill name="academics" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk1"/>

            <Text name={t('skill:awareness')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk2" />
            <Fill name="awareness" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk2"/>

            <Text name={t('skill:finance')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk3" />
            <Fill name="finance" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk3"/>

            <Text name={t('skill:investigation')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk4" />
            <Fill name="investigation" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk4"/>

            <Text name={t('skill:medicine')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk5" />
            <Fill name="medicine" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk5"/>

            <Text name={t('skill:occult')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk6" />
            <Fill name="occult" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk6"/>

            <Text name={t('skill:politics')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk7" />
            <Fill name="politics" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk7"/>

            <Text name={t('skill:science')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk8" />
            <Fill name="science" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk8"/>

            <Text name={t('skill:technology')} repeatChar="." lineLenght="40" type="font-skill" column="ck3" line="lk9" />
            <Fill name="technology" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk9"/>
        </div>
    );
}

export default Skill;