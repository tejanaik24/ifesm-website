import service_training from '../../../../public/ifesm/offer_corporate_training.png';
import service_fire_protection from '../../../../public/ifesm/offer_cmc_amc.png';
import service_safety_audit from '../../../../public/ifesm/offer_safety_hira.png';
import worker_portrait from '../../../../public/ifesm/offer_manpower.png';
import ifesm_logo from '../../../../public/ifesm/ifesm-logo.png';

export { ifesm_logo };

export const offers = [
  {
    illustration: service_training,
    title: 'Corporate & In-house Training',
    details:
      'Comprehensive safety development for modern enterprises, delivered directly at your facility or online.',
  },
  {
    illustration: service_fire_protection,
    title: 'CMC & AMC',
    details:
      'Long-term operation and maintenance for safety equipment, fire suppression networks, and detection loops.',
  },
  {
    illustration: service_safety_audit,
    title: 'Safety & HIRA Audits',
    details:
      'Rigorous Hazard Identification & Risk Analysis across facility lifecycles.',
  },
  {
    illustration: worker_portrait,
    title: 'Manpower / Manning Services',
    details:
      'Qualified, outsourced HSE engineers, fire marshals, and safety officers for your operational sites.',
  },
];
