'use client';
import { Box, Text, Image } from '@chakra-ui/react'
// import Image from 'next/image'
import React from 'react'

export const About = (className) => {
  return (
    <Box w='full' bg='#EEF7FC' h={['100%','100vh']} alignItems='center' p='2rem' gap='10' display='flex' flexDirection={['column','row']}>
        <Box w={['full','50%']}>
            <Image src='/Group 3.png' width={[120,374]} height={[120,424]} alt=''/>
        </Box>
        <Box w={['full','50%']}  >
            <Box display='flex' w='full' mb='1rem' alignItems='center' gap='6'>
                  <Image src='/user.png'  alt=''/>
                <Text fontSize={['2rem','2.85rem']} whiteSpace='noWrap' fontWeight='700' fontFamily='satoshi'>About Me</Text>
                <Image src='/Vector 1.png' h='100%' w='50%' display={['none','block']} alt=''/>
            </Box>
            <Text  fontSize={['.8rem','1rem']} pb={['2rem','0']} fontFamily={className}  lineHeight='2rem' color='#1F1F29' fontWeight='400'>
Hello, I am Kolade Elizabeth, Creative Front-End Developer. I enjoy working closely with design teams to faithfully translate their designs right down to the last pixel. I am adept at handling multiple projects in a fast paced environment using modern frontend technologies. 
Excellent at time management, organization, problem solving and meeting deadlines.

            </Text>
        </Box>
    </Box>
  )
}
