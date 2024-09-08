'use client';

import Head from 'next/head'
import { ChakraProvider } from '@chakra-ui/react'
import Header from '../components/Header'
import Nav from '../components/Nav'
import { About } from '../components/About'
import Works from '../components/Works'
import Footer from '../components/Footer'
import { Raleway } from "next/font/google";

export const raleway = Raleway({ subsets: ["latin"] , variable: '--font-raleway',weight: '400',});

export default function Home() {
  return (
    <ChakraProvider>
      <Head>
        <title>Lizzie portfolio</title>
        <meta name="description" content="Created with love ❤️" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Ellipse 7.png" />
      </Head>
      <Nav className={raleway.variable}/>
      <Header className={raleway.variable}/>      
      <About className={raleway.variable}/>
      <Works className={raleway.variable} />
      <Footer className={raleway.variable} />
    </ChakraProvider>
  )
}
