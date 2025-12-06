'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */

import { CertificateCard } from './shared/CertificateCard';
import { SectionContainer } from './shared/SectionContainer';
import { SectionHeader } from './shared/SectionHeader';
import { MotionContainer } from './shared/MotionContainer';
import { certificates } from '../data/certificates';

export function Certificates({ dict }: { dict: any }) {
    // If no certificates, don't render the section
    if (!certificates || certificates.length === 0) return null;

    return (
        <SectionContainer id='certificates'>
            <MotionContainer className='max-w-4xl mx-auto'>
                <SectionHeader
                    title={dict.certificates.title}
                    subtitle={dict.certificates.subtitle}
                />

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {certificates.map((cert, index) => (
                        <CertificateCard
                            key={index}
                            certificate={cert}
                            viewCertificateBtnText={dict.certificates.viewCertificate}
                        />
                    ))}
                </div>
            </MotionContainer>
        </SectionContainer>
    );
}
