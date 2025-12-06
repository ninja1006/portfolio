'use client';

// import { motion } from 'framer-motion';

export const HeroBackground = () => {
  return (
    <div className='absolute inset-0 z-0'>
      <div className='absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-primary/30 rounded-full filter blur-[60px] opacity-40 animate-blob' />
      <div className='absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-secondary/20 rounded-full filter blur-[70px] opacity-40 animate-blob animation-delay-2000' />
      <div className='absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-zinc-500/10 rounded-full filter blur-[60px] opacity-40 animate-blob animation-delay-4000' />

      {/* Main gradient overlay */}
      {/* <div className='absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/90 z-10' /> */}

      {/* Colored gradient layers */}
      {/* <div className='absolute inset-0 bg-gradient-to-r from-purple-900/30 via-background to-indigo-900/30 z-20' /> */}

      {/* Animated blobs */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
        className='absolute inset-0 z-30'
      >
        <div className='absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-primary/30 rounded-full filter blur-[60px] opacity-40 animate-blob' />
        <div className='absolute top-[-100px] right-[-100px] w-[350px] h-[350px] bg-indigo-600/30 rounded-full filter blur-[70px] opacity-40 animate-blob animation-delay-2000' />
        <div className='absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[450px] h-[450px] bg-purple-600/30 rounded-full filter blur-[60px] opacity-40 animate-blob animation-delay-4000' />
      </motion.div> */}
    </div>
  );
};
