"use client";
import { motion } from "framer-motion"
import Link from "next/link";

export default function Header() {
  return (
    <header className='flex justify-between items-center p-4 text-white'>
        <motion.div className="flex items-center"
        transition={{ type: 'spring', damping: 18, mass: 0.75 }}
        initial={{ opacity:0, x:-1000 }}
        animate={{ opacity:1, x:0 }}
        >
            <h1 className="text-black text-2xl font-bold">Book App</h1>
            <motion.input type="text" placeholder="Tell me what you like to read..."
            className="p-2 pl-3 ml-5 text-black"
            initial={{ opacity:0,x:-100 }}
            animate={{ opacity:1, x:0}}
            style={searchInputStyle}
            />

            
        </motion.div>
        <motion.div
        className="flex items-center"
        transition={{ type: "spring", damping:18, mass:0.75 }}
        initial={{ opacity:0,x:1000 }}
        animate={{ opacity:1,x:0 }}
        style={rightContainerStyle}
        >
            <Link href="/profile" className="mr-1" style={avatarLinkStyle} >
                <motion.img src="./avatar.png" alt="avatar" initial={{ opacity:0, x:100 }}
                animate={{ opacity:1, x:0 }}
                style={avatarStyle}
                className="rounded"
                />

                
            </Link>
        </motion.div>
    </header>
  )
}

const searchInputStyle = {
    
    minWidth: "320px",
    borderRadius: "30px",
    border: "2px solid #000",
    marginLeft: "30px"

}
const avatarLinkStyle = {

}
const avatarStyle = {
    width: "40px",
    height: "40px"
    
}
const rightContainerStyle = {

}