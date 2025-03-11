import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { BlogPost } from '../data/types';

export const getBlogPosts = (): BlogPost[] => {
  const blogsDirectory = path.join(process.cwd(), 'public/blogs');
  const directories = fs.readdirSync(blogsDirectory);

  const posts = directories
    .map((dir) => {
      const dirPath = path.join(blogsDirectory, dir);
      const files = fs.readdirSync(dirPath);
      const mdFile = files.find((file) => file.endsWith('.md'));

      if (!mdFile) return null;

      const fullPath = path.join(dirPath, mdFile);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { content, data } = matter(fileContents);

      return {
        slug: dir,
        title: data.title || mdFile.replace('.md', ''),
        content,
        directory: dir,
        publishedDate: data.publishedDate,
        tags: data.tags,
        description: data.description,
      };
    })
    .filter((post): post is BlogPost => post !== null);

  return posts;
};

export const getBlogPostBySlug = (slug: string): BlogPost | null => {
  const blogsDirectory = path.join(process.cwd(), 'public/blogs');
  const dirPath = path.join(blogsDirectory, slug);

  try {
    const files = fs.readdirSync(dirPath);
    const mdFile = files.find((file) => file.endsWith('.md'));

    if (!mdFile) return null;

    const fullPath = path.join(dirPath, mdFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { content, data } = matter(fileContents);

    return {
      slug,
      title: data.title || mdFile.replace('.md', ''),
      description: data.description,
      content,
      directory: slug,
      publishedDate: data.publishedDate,
      tags: data.tags,
    };
  } catch {
    return null;
  }
};
