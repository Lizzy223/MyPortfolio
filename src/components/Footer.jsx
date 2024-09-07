import { Box,Text} from '@chakra-ui/react'
import React from 'react'
import { FaLinkedin, FaGithub} from 'react-icons/fa'
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
      <Box bg='#02091B'>
          <Box w='full' display='flex' alignItems='center' justifyContent='space-evenly' p='2rem'>
              <Box as='a' href='https://www.linkedin.com/in/thisebiragirl' target='_blank'>
                 <FaLinkedin style={{fontSize:'1.5rem',color:'#fff'}} /> 
              </Box>
              <Box as='a' href='https://github.com/Lizzy223' target='_blank'>
              <FaGithub style={{fontSize:'1.5rem',color:'#fff'}}  /></Box>
              <Box as='a' href='mailto:koladeelizabeth01@gmail.com' target='_blank'>
              <SiGmail  style={{fontSize:'1.5rem',color:'#fff'}} /></Box>
      </Box>
      <Box w='full' bg='#02091B' display='flex' alignItems='center' justifyContent='space-evenly' p='2rem'>
              <Text fontWeight='400' fontFamily="Reddit Sans" color='whitesmoke'>Developed by
                  <Text as='a' cursor='pointer' color='whitesmoke' fontWeight='600' fontFamily="Reddit Sans" href='https://www.linkedin.com/in/thisebiragirl' target='_blank' >Lizzie</Text>
                  Designed by 
                  <Text as='a' cursor='pointer' color='whitesmoke' fontWeight='600'  fontFamily="Reddit Sans"  href='https://www.linkedin.com/in/iamabdooll/' target='_blank' >Abdul</Text>
              </Text>
      </Box>
    </Box>
  )
}

export default Footer