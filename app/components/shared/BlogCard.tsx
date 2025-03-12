import React from 'react';
import { BlogPost } from '@/app/data/types';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <div className='bg-gray-900 p-8 rounded-lg'>
      <h2 className='text-2xl font-bold mb-6'>{post.title}</h2>
      <p className='text-md text-muted-foreground mb-2'>{post.description}</p>
      <p className='text-sm text-muted-foreground mb-2'>
        {new Date(post.publishedDate).toLocaleDateString('tr-TR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })}
      </p>
      <div className='flex justify-between items-center'>
        <div className='flex flex-wrap gap-2'>
          {post.tags.map((tag) => (
            <p
              key={tag}
              className='p-2 rounded-lg bg-primary/20 text-sm text-muted-foreground'
            >
              #{tag}
            </p>
          ))}
        </div>

        <Link
          href={`/blog/${post.slug}`}
          className='group inline-flex items-center gap-1 px-4 py-2 bg-primary rounded-lg text-primary-foreground hover:bg-primary/80 transition-all duration-300'
          tabIndex={0}
          aria-label={`${post.title} yazısını oku`}
        >
          <span>Devamını Oku</span>
          <FaArrowRight className='w-4 h-4 transform translate-x-0 group-hover:translate-x-1 transition-transform duration-300' />
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
