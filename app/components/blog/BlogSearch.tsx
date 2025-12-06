'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { BlogSearchProps } from '@/app/data/types';
import BlogCard from './BlogCard';
import { FiSearch } from 'react-icons/fi';
import { CgSpinner } from 'react-icons/cg';

const BlogSearch: React.FC<BlogSearchProps> = ({ initialPosts }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    setIsLoading(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredPosts = useMemo(() => {
    if (!searchQuery.trim()) return initialPosts;

    const query = searchQuery.toLowerCase().trim();

    return initialPosts.filter((post) => {
      const titleMatch = post.title.toLowerCase().includes(query);
      const descriptionMatch = post.description.toLowerCase().includes(query);
      const tagsMatch = post.tags.some((tag) =>
        tag.toLowerCase().includes(query)
      );

      return titleMatch || descriptionMatch || tagsMatch;
    });
  }, [initialPosts, searchQuery]);

  return (
    <>
      <div className='relative mb-8'>
        <div className='absolute inset-y-0 left-3 flex items-center pointer-events-none'>
          <FiSearch className='h-5 w-5 text-muted-foreground' />
        </div>
        <input
          type='text'
          placeholder='Başlık, açıklama veya etiketlerde ara...'
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          className='w-full pl-10 pr-4 py-3 bg-secondary/30 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-foreground placeholder:text-muted-foreground'
          aria-label='Blog yazılarında ara'
          tabIndex={0}
        />
        {isLoading && (
          <div className='absolute inset-y-0 right-3 flex items-center'>
            <CgSpinner className='h-5 w-5 text-primary animate-spin' />
          </div>
        )}
      </div>

      {isLoading ? (
        <div className='flex justify-center items-center py-20'>
          <CgSpinner className='h-10 w-10 text-primary animate-spin' />
          <span className='ml-3 text-lg text-muted-foreground'>
            Aranıyor...
          </span>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className='text-center py-10'>
          <p className='text-xl text-muted-foreground'>
            Aramanızla eşleşen yazı bulunamadı.
          </p>
          <p className='text-muted-foreground mt-2'>
            Lütfen farklı anahtar kelimelerle tekrar deneyin.
          </p>
        </div>
      ) : (
        filteredPosts.map((post) => <BlogCard key={post.slug} post={post} />)
      )}
    </>
  );
};

export default BlogSearch;
