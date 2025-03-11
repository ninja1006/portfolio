import React from 'react';
import { getBlogPosts } from '../utils/getBlogPosts';
import BlogCard from '../components/shared/BlogCard';

const BlogPage = () => {
  const posts = getBlogPosts();

  return (
    <div className='my-20'>
      <h1 className='text-4xl font-bold mb-4'>Blog</h1>
      <h2 className='text-xl text-muted-foreground mb-8 italic'>
        Bloguma hoşgeldiniz! Bu alanda yazılım geliştirme alanında edindiğim
        yeni bilgiler, yazılım geliştirme ile ilgili düşüncelerim ve yazılım
        geliştirme ile ilgili fikirlerimi paylaşacağım.
      </h2>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
