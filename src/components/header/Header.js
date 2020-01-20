import Input from '../input/Input'
import React from 'react';
import { useTranslation } from 'react-i18next';


var predatorTypes = [
    "Alleycat",
    "Bagger",
    "Blood Leech",
    "Cleaver",
    "Consensualist",
    "Farmer",
    "Osiris",
    "Sandman",
    "Scene Queen",
    "Siren"
];

var clanNames = [
    "Brujah",
    "Gangrel",
    "Malkavian",
    "Nosferatu",
    "Toreador",
    "Tremere",
    "Ventrue",
    "Caitiff",
    "Thin-Blooded"
];

function Header() {
    const { t } = useTranslation();
    return(
        <div>
            <Input name={t('common:header.name')} column="c1" line="l1" type="input" />
            <Input name="Concept" column="c1" line="l2" type="input" />
            <Input name="Predator" column="c1" line="l3" type="dropdown" options={predatorTypes} />
            <Input name="Chronicle" column="c2" line="l1" type="input" />
            <Input name="Ambition" column="c2" line="l2" type="input" />
            <Input name="Clan" column="c2" line="l3" type="dropdown" options={clanNames} />
            <Input name="Sire" column="c3" line="l1" type="input" />
            <Input name="Desire" column="c3" line="l2" type="input" />
            <Input name="Generation" column="c3" line="l3" type="input" />
        </div>
    );
}

export default Header;
