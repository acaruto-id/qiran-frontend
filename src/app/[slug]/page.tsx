'use client'

import MotivationLetter from '@/components/MotivationLetter'
import Image from 'next/image'
import { monteCarlo } from '@/fonts'
import SectionTitle from '@/components/SectionTitle'
import BrideProfile from '@/components/BrideProfile'
import PhotoCarousel from '@/components/PhotoCarousel'
import Countdown from '@/components/Countdown'
import Place from '@/components/Place'
import Comment from '@/components/Comment'
import AttendanceForm from '@/components/AttendanceForm'
import { useEffect } from 'react'

import { motion } from 'framer-motion'
import { zoomInVariant } from '@/utils/variant'

interface InvitationProps {
  params: { slug: string }
}

const Invitation = ({ params }: InvitationProps): React.ReactElement => {
  useEffect(() => {
    const audio = new Audio(
      'https://res.cloudinary.com/dk8so2dgw/video/upload/v1686580761/sample/n7oiqea4clgquovgnzhz.mp3'
    )
    audio.volume = 0.3
    audio.loop = true
    audio.play().catch(error => {
      console.error(error)
    })
  }, [])

  return (
    <>
      <div className='relative h-screen -z-10'>
        <Image
          src='/images/landing-image.png'
          alt='Landing image'
          width={0}
          height={0}
          className='absolute object-cover w-full h-full -z-10'
        />
        <div className='text-center'>
          <div className='pt-20 pb-12 text-xl text-center text-sage-700 drop-shadow-lg'>
            The wedding of
          </div>
          <div
            style={monteCarlo.style}
            className='pb-10 text-5xl text-sage-700 drop-shadow-lg'
          >
            Qolandar & Intan
          </div>
          <div className='pb-12 text-xl text-center text-sage-700 drop-shadow-lg'>
            Saturday, 27 May 2023
          </div>
        </div>
      </div>
      <div className='py-16 px-9 bg-scotch text-sage'>
        <MotivationLetter />
        <SectionTitle className='pt-20' />
        <BrideProfile className='pt-10' />
        <motion.p
          style={monteCarlo.style}
          className='text-4xl text-center my-7'
          variants={zoomInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          &
        </motion.p>
        <BrideProfile />

        <div>
          <motion.div
            className='flex items-center justify-between mb-4 -mx-8'
            variants={zoomInVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
          >
            <Image
              src='/images/BostonAngel2.png'
              alt='Flower'
              width={0}
              height={0}
              className='w-24 -scale-x-100'
            />
            <h2 style={monteCarlo.style} className='text-2xl font-medium '>
              Our Love Story
            </h2>
            <Image
              src='/images/BostonAngel2.png'
              alt='Flower'
              width={0}
              height={0}
              className='w-24'
            />
          </motion.div>
          <motion.div
            variants={zoomInVariant}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            className='grid grid-cols-2 grid-rows-3 text-sm gap-x-3 gap-y-7'
          >
            <div>
              <Image
                src='/images/photo1.jpg'
                alt='photo1'
                width={0}
                height={0}
                className='object-cover w-full rounded-xl aspect-image'
              />
            </div>
            <div className='text-justify'>
              <h2 className='mb-3 font-semibold text-center text-md'>
                Awal Bertemu
              </h2>
              <p className='leading-3 text-2xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum amet beatae exercitationem praesentium odit iste rem
                aut dolores ex porro eligendi quos illum accusamus sapiente
                maxime totam aliquid, labore tempore! Tenetur omnis eligendi
                amet! Qui.
              </p>
            </div>
            <div className='text-justify'>
              <h2 className='mb-3 font-semibold text-center text-md'>
                Lamaran
              </h2>
              <p className='leading-3 text-justify text-2xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum amet beatae exercitationem praesentium odit iste rem
                aut dolores ex porro eligendi quos illum accusamus sapiente
                maxime totam aliquid, labore tempore! Tenetur omnis eligendi
                amet! Qui.
              </p>
            </div>
            <motion.div
              variants={zoomInVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <Image
                src='/images/photo2.jpg'
                alt='photo2'
                width={0}
                height={0}
                className='object-cover w-full rounded-xl aspect-image'
              />
            </motion.div>
            <motion.div
              variants={zoomInVariant}
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true }}
            >
              <Image
                src='/images/photo3.jpg'
                alt='photo3'
                width={0}
                height={0}
                className='object-cover w-full rounded-xl aspect-image'
              />
            </motion.div>
            <div className='text-justify'>
              <h2 className='mb-3 font-semibold text-center text-md'>
                Resepsi
              </h2>
              <p className='leading-3 text-2xs'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum amet beatae exercitationem praesentium odit iste rem
                aut dolores ex porro eligendi quos illum accusamus sapiente
                maxime totam aliquid, labore tempore! Tenetur omnis eligendi
                amet! Qui.
              </p>
            </div>
          </motion.div>
        </div>
        <PhotoCarousel />
        <Countdown />
        <Place
          title='Akad Nikah'
          dateStart={new Date()}
          address='Jalan Jakarta, di Masjid Al Badrani'
        />
        <Place
          title='Akad Nikah'
          dateStart={new Date()}
          address='Jalan Jakarta, di Masjid Al Badrani'
        />
        <Place
          title='Akad Nikah'
          dateStart={new Date()}
          address='Jalan Jakarta, di Masjid Al Badrani'
        />
        <motion.p
          className='text-center text-2xs mb-3'
          variants={zoomInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          It is an honor and happiness for us if, Mr / Mrs / Brother / i can
          attend our wedding celebration. Looking forward to celebrate with you,
          Thank you.
        </motion.p>
        <motion.p
          className='text-center text-2xs'
          variants={zoomInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <motion.b variants={zoomInVariant}>also invite:</motion.b> <br />{' '}
          Keluarga Besar Acaruto <br /> Keluarga Besar Kadarusman
          <br /> Teman SMA Brawijaya Smart School
        </motion.p>
        <motion.h2
          variants={zoomInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
          style={monteCarlo.style}
          className='text-4xl font-medium my-8 text-center'
        >
          Send a Wish
        </motion.h2>
        <motion.div
          className='mb-10 h-52 overflow-y-scroll'
          variants={zoomInVariant}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true }}
        >
          <Comment
            name='Annuri'
            address='Ajibarang'
            comment='Selamat bahagia dan jangan lupa bersyukur'
          />
          <Comment
            name='Annuri'
            address='Ajibarang'
            comment='Selamat bahagia dan jangan lupa bersyukur'
          />
          <Comment
            name='Annuri'
            address='Ajibarang'
            comment='Selamat bahagia dan jangan lupa bersyukur'
          />
          <Comment
            name='Annuri'
            address='Ajibarang'
            comment='Selamat bahagia dan jangan lupa bersyukur'
          />
          <Comment
            name='Annuri'
            address='Ajibarang'
            comment='Selamat bahagia dan jangan lupa bersyukur'
          />
          <Comment
            name='Annuri'
            address='Ajibarang'
            comment='Selamat bahagia dan jangan lupa bersyukur'
          />
        </motion.div>
        <AttendanceForm />
      </div>
    </>
  )
}

export default Invitation
