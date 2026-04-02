'use client';

import { CertificateCard } from './shared/CertificateCard';
import { CardGrid } from './shared/CardGrid';
import { certificates } from '../data/certificates';
import { Certificate } from '../data/types';
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
      renderCard={(cert) => <CertificateCard certificate={cert} />}
    />
  );
}
