import React from 'react';
import { getBlogPostBySlug } from '@/app/utils/getBlogPosts';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

const BlogPostPage = ({ params }: BlogPostPageProps) => {
  const post = getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className='container mx-auto my-20'>
      <h1 className='text-6xl font-bold mb-8'>{post.title}</h1>
      <article className='prose prose-lg max-w-none prose-headings:text-white/50 prose-headings:text-4xl prose-headings:font-bold prose-headings:mb-4 prose-headings:mt-8 prose-p:text-white prose-a:text-primary prose-code:text-white'>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
};

export default BlogPostPage;
