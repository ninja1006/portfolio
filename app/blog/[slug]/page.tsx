import { use } from 'react';
import { getBlogPostBySlug } from '@/app/utils/getBlogPosts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
import Link from 'next/link';
import Image from 'next/image';

export default function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='container mx-auto my-20'>
      <div className='mb-8'>
        <Link
          href='/blog'
          className='flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='m15 18-6-6 6-6' />
          </svg>
          <span>Geri Dön</span>
        </Link>
      </div>
      <h1 className='text-6xl font-bold mb-8'>{post.title}</h1>
      <article className='prose prose-lg max-w-none prose-headings:text-foreground prose-headings:text-4xl prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8 prose-p:text-muted-foreground prose-a:text-primary prose-code:text-foreground prose-code:bg-secondary prose-code:p-2 prose-code:rounded-md'>
        <ReactMarkdown
          components={{
            img: ({ src, alt }) => {
              if (!src) return null;

              const imagePath = `/blogs/${post.directory}/${src}`;

              return (
                <Image
                  src={imagePath}
                  alt={alt || 'Blog görseli'}
                  width={800}
                  height={400}
                  className='object-contain my-6 mx-auto'
                />
              );
            },
          }}
        >
          {post.content}
        </ReactMarkdown>
      </article>
    </div>
  );
}
