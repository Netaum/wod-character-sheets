import React from 'react';
import './Labels.css';
import { useTranslation } from 'react-i18next';


function Labels() {
    const { t } = useTranslation();
    return (
        <div>
            <span className="font-label font-sub0 label_attribute">{t('labels:attributes')}</span>
            <span className="font-label font-sub0 label_skill">{t('labels:skills')}</span>
            <span className="font-label font-sub0 label_discipline">{t('labels:diciplines')}</span>
            <span className="font-label font-sub0 label_advantages">{t('labels:advantagesFlaws')}</span>

            <span className="font-label font-sub1 l1_attribute c1_attribute">{t('labels:physical')}</span>
            <span className="font-label font-sub1 l1_attribute c2_attribute">{t('labels:social')}</span>
            <span className="font-label font-sub1 l1_attribute c3_attribute">{t('labels:mental')}</span>
            <span className="font-label font-sub1 l2_attribute c4_attribute">{t('labels:health')}</span>
            <span className="font-label font-sub1 l2_attribute c5_attribute">{t('labels:willpower')}</span>

            <span className="font-label font-sub1 label_blood">{t('labels:bloodPotency')}</span>
            <span className="font-label font-sub1 label_humanity">{t('labels:humanity')}</span>
            <span className="font-label font-sub1 label_hunger">{t('labels:hunger')}</span>

            <span className="font-label font-sub2 label_extra1">{t('labels:ressonance')}</span>
            <span className="font-label font-sub2 label_extra2">{t('labels:hunting')}</span>
            <span className="font-label font-sub2 label_extra3">{t('labels:bloodSurge')}</span>
            <span className="font-label font-sub2 label_extra4">{t('labels:mendAmount')}</span>
            <span className="font-label font-sub2 label_extra5">{t('labels:powerBonus')}</span>
            <span className="font-label font-sub2 label_extra6">{t('labels:rouseReRoll')}</span>
            <span className="font-label font-sub2 label_extra7">{t('labels:feedingPenalty')}</span>
            <span className="font-label font-sub2 label_extra8">{t('labels:banSeverity')}</span>
        </div>
    );
};

export default Labels;