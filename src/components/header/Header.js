import Input from '../input/Input'
import React from 'react';
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
    return(
        <div>
            <Input name={t('header:name')} column="c1" line="l1" type="input" />
            <Input name={t('header:concept')} column="c1" line="l2" type="input" />
            <Input name={t('header:predator')} column="c1" line="l3" type="dropdown" options={t('header:predatorTypes', { returnObjects: true })} />
            <Input name={t('header:chronicle')} column="c2" line="l1" type="input" />
            <Input name={t('header:ambition')} column="c2" line="l2" type="input" />
            <Input name={t('header:clan')} column="c2" line="l3" type="dropdown" options={t('header:clanNames', { returnObjects: true })} />
            <Input name={t('header:sire')} column="c3" line="l1" type="input" />
            <Input name={t('header:desire')} column="c3" line="l2" type="input" />
            <Input name={t('header:generation')} column="c3" line="l3" type="input" />
        </div>
    );
}

export default Header;
