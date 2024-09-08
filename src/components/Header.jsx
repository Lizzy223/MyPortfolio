'use client';
import React from 'react'
import {Box, Text, } from '@chakra-ui/react'
import Image from 'next/image'
import {ReactTyped} from "react-typed"
import Buttons from '../common/Button'


const Header = (className) => {
  return (
    <Box w='full' h={['100%','75vh']} gap='12' p={['1rem','2rem']} bg='#02091B' color='#fff' display='flex' flexDirection={['column','row']} justifyContent='space-between' alignItems='center' >
            
        <Box w={['full','50%']} p={['0','2rem']} mt={['1rem','']} display='flex' flexDirection='column' gap='6' >
            <Text fontSize='20px' fontFamily={className} color='#F2F2F4' fontWeight='400'>
HEY THERE
            </Text>
            <Text fontSize={['2rem','56px']} fontFamily='satoshi' whiteSpace='nowrap' fontWeight='900'>👋 I’m Lizzie.</Text>
            <Text  fontSize={['.8rem','20px']} fontFamily={className} color='#F2F2F4' fontWeight='400'>
                <ReactTyped
                strings={[
                        "I’m a front-end developer specialized in building user centered digital experiences.",
                        "Specialized in building user centered digital experiences.",
                        "Self-taught frontend developer passionate about programming with comprehensive experience in working on projects and delivers tasks on time.",
                    ]}
                    typeSpeed={150}
                    backSpeed={100}
                    loop
                    />
               </Text>
            <Box as='a' href='mailto:koladeelizabeth01@gmail.com'><Buttons>Let us Talk</Buttons></Box>
            
        </Box>
        <Box w={['full','50%']} float='right'>
            <Image src='/7922058 1 (1).png' height={458} width={458}  alt='' />
        </Box>
    </Box>
  )
}

export default Header