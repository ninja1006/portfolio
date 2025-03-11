import React from 'react';

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='container mx-auto'>{children}</div>;
};

export default BlogLayout;
