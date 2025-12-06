'use client';

import { m } from 'framer-motion';
import { Certificate } from '@/app/data/types';
import { motionItem } from './MotionContainer';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';

interface CertificateCardProps {
    certificate: Certificate;
}

export const CertificateCard = ({ certificate }: CertificateCardProps) => {
    return (
        <m.div
            variants={motionItem}
            className='bg-secondary/30 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:border-primary/30 transition-all duration-300 flex flex-col h-full group'
        >
            <div className='flex items-start justify-between mb-4'>
                <div className='p-3 bg-primary/10 rounded-full text-primary group-hover:scale-110 transition-transform duration-300'>
                    <FaAward className='w-6 h-6' />
                </div>
                {certificate.date && (
                    <span className='px-3 py-1 text-xs font-medium rounded-full bg-secondary text-muted-foreground'>
                        {certificate.date}
                    </span>
                )}
            </div>

            <h3 className='text-lg font-semibold mb-2 line-clamp-2 group-hover:text-primary transition-colors'>
                {certificate.title}
            </h3>

            <p className='text-muted-foreground text-sm mb-4 line-clamp-2 flex-grow'>
                {certificate.issuer}
            </p>

            {certificate.url && (
                <Link
                    href={certificate.url}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center text-sm text-primary hover:underline mt-auto gap-2'
                >
                    Sertifikayı Görüntüle
                    <FaExternalLinkAlt className='w-3 h-3' />
                </Link>
            )}
        </m.div>
    );
};
