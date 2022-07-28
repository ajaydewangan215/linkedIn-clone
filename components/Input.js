import PhotoSizeSelectActual from "@mui/icons-material/PhotoSizeSelectActual";
import VideoCameraBack from "@mui/icons-material/VideoCameraBack";
import BusinessCenter from "@mui/icons-material/BusinessCenter";
import Article from "@mui/icons-material/Article";

import { Avatar } from '@mui/material'
import { motion } from 'framer-motion';
import { useSession } from 'next-auth/react';
import React from 'react'
// import { useRecoilState } from 'recoil';
// import { modalState, modalTypeState } from '../atoms/modalAtom';

const Input = () => {
  const { data: session } = useSession();
  // const [modalOpen, setModalOpen] = useRecoilState(modalState)
  // const [modalType, setModalType] = useRecoilState(modalTypeState)
  return (
    <div className='bg-white dark:bg-[#1D2226] rounded-lg p-3 space-y-3 border border-gray-300 dark:border-none'>
      <div className="flex items-center space-x-2">
        <Avatar src={session?.user?.image} className="!h-10 !w-10 cursor-pointer"/>

        <motion.button
          whileTap={{scale:0.99}}
          whileHover={{scale:1.01}}
          className="rounded-full border border-gray-400 py-2.5 px-3 opacity-80 hover:opacity-100 font-medium w-full text-left"
          // onClick={()=> {
          //   setModalOpen(true)
          //   setModalType("dropIn")
          // }}
          >
            Start a post
          </motion.button>
      </div>
      <div className='flex items-center flex-wrap justify-center gap-4 md:gap-x-10'>
        <button className="inputButton group">
          <PhotoSizeSelectActual className='text-blue-400' />
          <h4 className='opacity-80 group-hover:opacity-100'>Photo</h4>
        </button>
        <button className="inputButton group">
          <VideoCameraBack className='text-green-400' />
          <h4 className='opacity-80 group-hover:opacity-100'>Video</h4>
        </button>
        <button className="inputButton group">
          <BusinessCenter className='text-blue-300' />
          <h4 className='opacity-80 group-hover:opacity-100'>Job</h4>
        </button>
        <button className="inputButton group">
          <Article className='text-red-400' />
          <h4 className='opacity-80 group-hover:opacity-100 whitespace-nowrap'>Write Article</h4>
        </button>
      </div>
    </div>
  )
}

export default Input