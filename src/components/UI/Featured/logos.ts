import adani from '../../../../public/ifesm/logos/logo-adani.svg';
import amazon from '../../../../public/ifesm/logos/logo-amazon.svg';
import annapurna from '../../../../public/ifesm/logos/logo-annapurna-studios.png';
import apgenco from '../../../../public/ifesm/logos/logo-apgenco.jpg';
import asianPaints from '../../../../public/ifesm/logos/logo-asian-paints.png';
import bhel from '../../../../public/ifesm/logos/logo-bhel.svg';
import carlsberg from '../../../../public/ifesm/logos/logo-carlsberg.svg';
import cocaCola from '../../../../public/ifesm/logos/logo-coca-cola.svg';
import daimler from '../../../../public/ifesm/logos/logo-daimler.svg';
import drReddys from '../../../../public/ifesm/logos/logo-dr-reddys.svg';
import emami from '../../../../public/ifesm/logos/logo-emami.png';
import essarSteel from '../../../../public/ifesm/logos/logo-essar-steel.svg';
import falck from '../../../../public/ifesm/logos/logo-falck.png';
import gmr from '../../../../public/ifesm/logos/logo-gmr.svg';
import godrejBoyce from '../../../../public/ifesm/logos/logo-godrej-boyce.svg';
import gubba from '../../../../public/ifesm/logos/logo-gubba.png';
import hyundaiMobis from '../../../../public/ifesm/logos/logo-hyundai-mobis.svg';
import imerys from '../../../../public/ifesm/logos/logo-imerys.png';
import inoxAirProducts from '../../../../public/ifesm/logos/logo-inox-air-products.png';
import interarch from '../../../../public/ifesm/logos/logo-interarch.png';
import itc from '../../../../public/ifesm/logos/logo-itc.svg';
import johnsonJohnson from '../../../../public/ifesm/logos/logo-johnson-johnson.svg';
import kcp from '../../../../public/ifesm/logos/logo-kcp.png';
import kerneos from '../../../../public/ifesm/logos/logo-kerneos.png';
import kirby from '../../../../public/ifesm/logos/logo-kirby.png';
import lanco from '../../../../public/ifesm/logos/logo-lanco.gif';
import lansum from '../../../../public/ifesm/logos/logo-lansum.svg';
import linfox from '../../../../public/ifesm/logos/logo-linfox.svg';
import lt from '../../../../public/ifesm/logos/logo-lt.png';
import meil from '../../../../public/ifesm/logos/logo-meil.png';
import mytrah from '../../../../public/ifesm/logos/logo-mytrah.jpg';
import ncc from '../../../../public/ifesm/logos/logo-ncc.svg';
import nilkamal from '../../../../public/ifesm/logos/logo-nilkamal.svg';
import nslTextiles from '../../../../public/ifesm/logos/logo-nsl-textiles.png';
import powerMech from '../../../../public/ifesm/logos/logo-power-mech.png';
import safran from '../../../../public/ifesm/logos/logo-safran.svg';
import sembcorp from '../../../../public/ifesm/logos/logo-sembcorp.png';
import shapoorjiPallonji from '../../../../public/ifesm/logos/logo-shapoorji-pallonji.svg';
import tata from '../../../../public/ifesm/logos/logo-tata.svg';
import total from '../../../../public/ifesm/logos/logo-total.png';
import apache from '../../../../public/ifesm/logos/logo-apache.jpg';
import bharatSalts from '../../../../public/ifesm/logos/logo-bharat-salts-archean.png';
import bmw from '../../../../public/ifesm/logos/logo-bmw.png';
import bothra from '../../../../public/ifesm/logos/logo-bothra.png';
import brandix from '../../../../public/ifesm/logos/logo-brandix.png';
import cpAquaCulture from '../../../../public/ifesm/logos/logo-cp-aqua-culture.gif';
import constellGroup from '../../../../public/ifesm/logos/logo-constell-group.png';
import dlfIndia from '../../../../public/ifesm/logos/logo-dlf-india.png';
import hccb from '../../../../public/ifesm/logos/logo-hccb.png';
import hyundaiGlovis from '../../../../public/ifesm/logos/logo-hyundai-glovis.png';
import indwell from '../../../../public/ifesm/logos/logo-indwell.png';
import laurusLabs from '../../../../public/ifesm/logos/logo-laurus-labs.png';
import petron from '../../../../public/ifesm/logos/logo-petron.jpg';
import shreeGroup from '../../../../public/ifesm/logos/logo-shree-group.jpg';
import sriKrishnaPharma from '../../../../public/ifesm/logos/logo-sri-krishna-pharma.jpg';
import varunGroup from '../../../../public/ifesm/logos/logo-varun-group.png';
import vasudhaPharmaChem from '../../../../public/ifesm/logos/logo-vasudha-pharma-chem.jpg';
import vindhyaPharma from '../../../../public/ifesm/logos/logo-vindhya-pharma.jpg';
import vishnuChemicals from '../../../../public/ifesm/logos/logo-vishnu-chemicals.jpg';
import alstom from '../../../../public/ifesm/logos/logo-alstom.png';
import type { StaticImageData } from 'next/image';

export interface ClientLogo {
  name: string;
  src: StaticImageData;
}

export const clientLogos: ClientLogo[] = [
  { name: 'Adani', src: adani },
  { name: 'Amazon', src: amazon },
  { name: 'Sembcorp', src: sembcorp },
  { name: 'GMR Group', src: gmr },
  { name: 'Interarch', src: interarch },
  { name: 'ITC Limited', src: itc },
  { name: 'KCP', src: kcp },
  { name: 'Lansum Properties', src: lansum },
  { name: 'Larsen & Toubro', src: lt },
  { name: 'MEIL', src: meil },
  { name: 'Nilkamal', src: nilkamal },
  { name: 'NSL Textiles', src: nslTextiles },
  { name: 'NCC Limited', src: ncc },
  { name: 'Power Mech', src: powerMech },
  { name: 'Asian Paints', src: asianPaints },
  { name: 'Coca-Cola', src: cocaCola },
  { name: 'Carlsberg', src: carlsberg },
  { name: 'BHEL', src: bhel },
  { name: 'TATA', src: tata },
  { name: 'Annapurna Studios', src: annapurna },
  { name: 'APGENCO', src: apgenco },
  { name: 'Godrej & Boyce', src: godrejBoyce },
  { name: 'Daimler', src: daimler },
  { name: 'Emami', src: emami },
  { name: 'Essar Steel', src: essarSteel },
  { name: 'Falck', src: falck },
  { name: 'Gubba Cold Storage', src: gubba },
  { name: 'INOX Air Products', src: inoxAirProducts },
  { name: 'Johnson & Johnson', src: johnsonJohnson },
  { name: 'Hyundai Mobis', src: hyundaiMobis },
  { name: 'Kirby Building Systems', src: kirby },
  { name: 'LANCO', src: lanco },
  { name: 'Linfox', src: linfox },
  { name: 'Kerneos', src: kerneos },
  { name: 'Safran', src: safran },
  { name: 'Imerys', src: imerys },
  { name: 'Mytrah Energy', src: mytrah },
  { name: 'Shapoorji Pallonji', src: shapoorjiPallonji },
  { name: 'TotalEnergies', src: total },
  { name: "Dr. Reddy's", src: drReddys },
  { name: 'Apache', src: apache },
  { name: 'Bharat Salts (Archean Group)', src: bharatSalts },
  { name: 'BMW', src: bmw },
  { name: 'Bothra', src: bothra },
  { name: 'Brandix', src: brandix },
  { name: 'C P Aqua Culture', src: cpAquaCulture },
  { name: 'Constell Group', src: constellGroup },
  { name: 'DLF India', src: dlfIndia },
  { name: 'HCCB', src: hccb },
  { name: 'Hyundai Glovis', src: hyundaiGlovis },
  { name: 'Indwell', src: indwell },
  { name: 'Laurus Labs', src: laurusLabs },
  { name: 'Petron', src: petron },
  { name: 'Shree Group', src: shreeGroup },
  { name: 'Sri Krishna Pharmaceuticals', src: sriKrishnaPharma },
  { name: 'Varun Group', src: varunGroup },
  { name: 'Vasudha Pharma Chem', src: vasudhaPharmaChem },
  { name: 'Vindhya Pharma', src: vindhyaPharma },
  { name: 'Vishnu Chemicals', src: vishnuChemicals },
  { name: 'Alstom', src: alstom },
];

const half = Math.ceil(clientLogos.length / 2);
// Desktop: one row keeps scrolling, the rest drop into the physics gallery.
export const scrollLogos = clientLogos.slice(0, half);
export const dropLogos = clientLogos.slice(half);

// Mobile: smaller, curated split so the drop group stays light on small screens.
const mobileScrollNames = [
  'Adani',
  'Amazon',
  'Coca-Cola',
  'TATA',
  'BHEL',
  'ITC Limited',
  'Larsen & Toubro',
  'Carlsberg',
  'Johnson & Johnson',
  "Dr. Reddy's",
];
const mobileDropNames = [
  'Asian Paints',
  'GMR Group',
  'Godrej & Boyce',
  'MEIL',
  'NCC Limited',
  'Power Mech',
  'Essar Steel',
  'Hyundai Mobis',
  'Sembcorp',
  'TotalEnergies',
];
export const mobileScrollLogos = clientLogos.filter(logo =>
  mobileScrollNames.includes(logo.name)
);
export const mobileDropLogos = clientLogos.filter(logo =>
  mobileDropNames.includes(logo.name)
);
