'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CertificateCard } from './shared/CertificateCard';
import { CardGrid } from './shared/CardGrid';
import { certificates } from '../data/certificates';
import { Certificate } from '../data/types';
import { FaLinkedin } from 'react-icons/fa';
import { useDictionary } from '../context/DictionaryContext';

export function Certificates() {
  const dict = useDictionary();
  return (
    <CardGrid<Certificate>
      id='certificates'
      title={dict.certificates.title}
      subtitle={dict.certificates.subtitle}
      items={certificates}
      maxWidth='max-w-6xl'
      sortItems={(items) =>
        items.sort((a, b) => parseInt(b.date) - parseInt(a.date))
      }
      enableMobileScroll={true}
      actionButton={{
        text: dict.certificates.viewAllCertificates,
        href: 'https://www.linkedin.com/in/adylshay/',
        icon: <FaLinkedin className='w-5 h-5' />,
      }}
      renderCard={(cert) => <CertificateCard certificate={cert} />}
    />
  );
}
