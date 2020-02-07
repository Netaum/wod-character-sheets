import Input from '../input/Input';
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return(
        <div>
            <Input name={t('header:name')} type="header" column="c1" line="l1" mode="input" />
            <Input name={t('header:concept')} type="header" column="c1" line="l2" mode="input" />
            <Input name={t('header:predator')} type="header" column="c1" line="l3" mode="dropdown" options={t('header:predatorTypes', { returnObjects: true })} />
            <Input name={t('header:chronicle')} type="header" column="c2" line="l1" mode="input" />
            <Input name={t('header:ambition')} type="header" column="c2" line="l2" mode="input" />
            <Input name={t('header:clan')} type="header" column="c2" line="l3" mode="dropdown" options={t('header:clanNames', { returnObjects: true })} />
            <Input name={t('header:sire')} type="header" column="c3" line="l1" mode="input" />
            <Input name={t('header:desire')} type="header" column="c3" line="l2" mode="input" />
            <Input name={t('header:generation')} type="header" column="c3" line="l3" mode="input" />
        </div>
    );
}

export default Header;
