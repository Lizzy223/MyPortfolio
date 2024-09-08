'use client';
import React from 'react'
import { Box,Image, Text } from '@chakra-ui/react'
// import Buttons from '../common/Button'

const Works = (className) => {
  const data = [
    {
      id: 1,
      img: '/1.png',
      link: 'https://maildrip.io/',
      about:'Maildrip: Simplified email marketing tool for creators and personal brands.Worked with several other developers on this saas project. Implemented using react js, rtk query, antd, tailwind css and node js for backend,'
    },
    {
      id: 2,
      img: '/2.png',
      link: 'https://neemble.vercel.app',
      about: 'Neemble: A payment platform web-page built by me using react js, chakra ui.'
    },
    {
      id: 3,
      img: '/3.png',
      link: 'https://nissi-portfolio.vercel.app/',
      about: 'Portfolio: Designed the portfolio for a data science engineer.'
    },
    {
      id: 4,
      img: '/4.png',
      link: 'https://vona.vercel.app',
      about: 'Vona: website for Vona Innovations built with react'
    },
    {
      id: 5,
      img: '/5.png',
      link: 'https://metabnb-eight.vercel.app/',
      about: 'simple landing page'
    },
    {
      id: 6,
      img: '/6.png',
      link: 'https://blog-peach-eight-35.vercel.app/',
      about: 'simple blog page built with vue js'
    },
    {
      id: 7,
      img: '/7.png',
      link: 'https://adatix-frontend.vercel.app',
      about: 'adatix'
    },
    {
      id: 8,
      img: '/8.png',
      link: 'https://www.propertymataaz.com/',
      about:'Propertymataaz: A platform where you sell, buy and rent properties. It was built with three other developers using next js, typescript and c# for the backend.'
    },
  ]

  return (
    <Box bg='#02091B' w='full' h='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' p='3rem'>
        <Box>
            <Box display='flex' w='full' mb='1rem' alignItems='center' gap='6'>
                  <Image src='/briefcase.png'  alt=''/>
                <Text fontSize={['1.25rem','2.85rem']} whiteSpace='noWrap' color='#fff' fontWeight='700' fontFamily={className||'satoshi'}>Some Things I’ve Built</Text>
                <Image src='/Vector 1.png' h='100%' w='50%' display={['none','block']} alt=''/>
            </Box>
            <Text fontSize={['.8rem','1.25rem']} fontWeight='400' color='#fff' fontFamily={className} >Check out some of my featured projects.</Text>
        </Box>
        <Box mb='2rem' display='grid' gap='6' mt='4rem' gridTemplateColumns={['repeat(1,1fr)','repeat(2,1fr)']} >
        {
          data?.map((i) => {
            return (
              <Box
                w={['100%', '547px']}
                h={['100%','460px']}
                position="relative"
                _hover={{
        '& > .overlay': { opacity: 1 }, // Show overlay on hover
      }} as='a' href={i?.link} target='_blank' key={i?.id}>
                <Image src={i?.img} w={['full', '100%']} h={['full', '100%']} objectFit='cover' overflow='hidden' transition='transform .5s ease' onhover={{ transform: 'scale(1.5)' }} alt='' />
                  <Box
                    className="overlay"
                    position="absolute"
                    top="0"
                    left="0"
                    width="100%"
                    height="100%"
                    backgroundColor="rgba(0, 0, 0, 0.6)" // Dark overlay
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    opacity="0" // Hidden by default
                    transition="opacity 0.3s ease"
                  >
                    <Text color="white" fontSize={[".65rem",".8rem"]} fontFamily={className} fontWeight="bold">
                      {i?.about||'Your Text Here'}
                    </Text>
                  </Box>
              </Box>
            )
          })
        }   
                          
        </Box>
        {/* <Buttons>ALL PROJECTS</Buttons> */}
    </Box>
  )
}

export default Works