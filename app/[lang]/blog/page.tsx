import React from 'react';
import { getBlogPosts } from '../../utils/getBlogPosts';
import BlogSearch from '../../components/blog/BlogSearch';
import { getDictionary } from '../../utils/get-dictionary';
import { Locale } from '../../../i18n-config';

interface BlogPageProps {
  params: Promise<{ lang: Locale }>;
}

const BlogPage = async ({ params }: BlogPageProps) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const posts = getBlogPosts();

  return (
    <div className='my-20 container mx-auto px-4'>
      <h1 className='text-4xl font-bold mb-4'>{dict.blog.title}</h1>
      <h2 className='text-xl text-muted-foreground mb-8 italic'>
        {dict.blog.subtitle}
      </h2>

      <BlogSearch initialPosts={posts} />
    </div>
  );
};

export default BlogPage;
