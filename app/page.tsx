"use client"
import Header from '@/components/Header';
import styles from './page.module.css'
import Sidebar from '@/components/Sidebar';
import { motion } from 'framer-motion';
import { books } from '@/constants/mockData';
import BookCard from '@/components/BookCard';


export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Header />
        <div className="flex justify-start items-start">
          <section className='' style={contentStyle}>
            <Sidebar />
          </section>
          <div className='p-6 rounded-sm' style={groupStyle}>
            <h1 className='font-bold text-3xl mb-4'>All Book</h1>
            <ul className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
              {
                books.map((book, i) => 
                  <motion.li 
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", damping: 50, mass: 0.75 }}
                  initial={{ opacity:0, x:200*(i+1) }}
                  animate={{ opacity:1, x: 0 }}
                  key={i}>
                    <a href={`/book/${book.id}`}>
                      <BookCard title={book.title} description={book.description} coverImage={book.image} />
                    </a>
                  </motion.li>
                )
              }
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}

const contentStyle = {
  width: "30%"
}
const groupStyle = {
  backgroundColor: "#f8eadd"
}