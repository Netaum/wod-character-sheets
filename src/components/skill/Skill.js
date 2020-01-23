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

            <Text name="Brawl...................................." type="font-skill" column="ck1" line="lk2" />
            <Fill name="bra" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk2"/>

            <Text name="Craft...................................." type="font-skill" column="ck1" line="lk3" />
            <Fill name="cra" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk3"/>

            <Text name="Drive...................................." type="font-skill" column="ck1" line="lk4" />
            <Fill name="dri" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk4"/>

            <Text name="Firearms................................." type="font-skill" column="ck1" line="lk5" />
            <Fill name="fir" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk5"/>

            <Text name="Larceny.................................." type="font-skill" column="ck1" line="lk6" />
            <Fill name="lar" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk6"/>

            <Text name="Melee...................................." type="font-skill" column="ck1" line="lk7" />
            <Fill name="mel" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk7"/>

            <Text name="Stealth.................................." type="font-skill" column="ck1" line="lk8" />
            <Fill name="ste" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk8"/>

            <Text name="Survival................................." type="font-skill" column="ck1" line="lk9" />
            <Fill name="sur" lenght="5" type="skill" firstFill="false" shape="circle" column="cws1" line="lk9"/>

            <Text name="Animal Ken..............................." type="font-skill" column="ck2" line="lk1" />
            <Fill name="ank" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk1"/>

            <Text name="Etiquette................................" type="font-skill" column="ck2" line="lk2" />
            <Fill name="eti" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk2"/>

            <Text name="Insight.................................." type="font-skill" column="ck2" line="lk3" />
            <Fill name="ins" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk3"/>

            <Text name="Intimidation............................." type="font-skill" column="ck2" line="lk4" />
            <Fill name="int" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk4"/>

            <Text name="Leadership..............................." type="font-skill" column="ck2" line="lk5" />
            <Fill name="lea" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk5"/>

            <Text name="Performance.............................." type="font-skill" column="ck2" line="lk6" />
            <Fill name="per" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk6"/>

            <Text name="Persuasion..............................." type="font-skill" column="ck2" line="lk7" />
            <Fill name="prs" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk7"/>

            <Text name="Streetwise..............................." type="font-skill" column="ck2" line="lk8" />
            <Fill name="stw" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk8"/>

            <Text name="Subterfuge..............................." type="font-skill" column="ck2" line="lk9" />
            <Fill name="sub" lenght="5" type="skill" firstFill="false" shape="circle" column="cws2" line="lk9"/>

            <Text name="Academics................................" type="font-skill" column="ck3" line="lk1" />
            <Fill name="ath" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk1"/>

            <Text name="Awareness................................" type="font-skill" column="ck3" line="lk2" />
            <Fill name="bra" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk2"/>

            <Text name="Finance.................................." type="font-skill" column="ck3" line="lk3" />
            <Fill name="cra" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk3"/>

            <Text name="Investigation............................" type="font-skill" column="ck3" line="lk4" />
            <Fill name="dri" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk4"/>

            <Text name="Medicine................................." type="font-skill" column="ck3" line="lk5" />
            <Fill name="fir" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk5"/>

            <Text name="Occult..................................." type="font-skill" column="ck3" line="lk6" />
            <Fill name="lar" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk6"/>

            <Text name="Politics................................." type="font-skill" column="ck3" line="lk7" />
            <Fill name="mel" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk7"/>

            <Text name="Science.................................." type="font-skill" column="ck3" line="lk8" />
            <Fill name="ste" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk8"/>

            <Text name="Technology..............................." type="font-skill" column="ck3" line="lk9" />
            <Fill name="sur" lenght="5" type="skill" firstFill="false" shape="circle" column="cws3" line="lk9"/>
        </div>
    );
}

export default Skill;