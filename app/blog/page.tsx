import React from 'react';
import { getBlogPosts } from '../utils/getBlogPosts';
import BlogCard from '../components/shared/BlogCard';

const BlogPage = () => {
  const posts = getBlogPosts();

  return (
    <div className='container mx-auto my-20'>
      <h1 className='text-4xl font-bold mb-8'>Blog</h1>
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
