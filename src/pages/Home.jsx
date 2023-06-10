import React, { useContext, useEffect, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Particle } from '../components/Particle'
import { Grid, GridItem, HStack, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import { LanguageContext } from '../context/LanguageContext'
import { EN, ES } from '../helpers/Traductor'

export const Home = () => {

  const {language} = useContext(LanguageContext);
  const [lan, setLan] = useState(ES[0])
  const [screen] = useMediaQuery('(min-width: 800px)')

  useEffect(() => {
    if(language === 'ES'){
      setLan(ES[0])
    } else {
      setLan(EN[0])
    }
  }, [language])
  

  return (
    <Grid templateColumns={`${screen ? 'repeat(8,1fr)' : 'repeat(1,1fr)'}`} w={['100%']} p={5} h='100vh' className='animate__animated animate__fadeIn animate__slow' zIndex={1}>
        <GridItem display='flex' pl='10'  m='0 auto' flexDirection='column' justifyContent='center' colSpan='3'>
            <img width={['85%']} height='100%' style={{marginBottom:'20px'}} src="../assets/img/perfil.jpeg" alt="" />
        </GridItem>
        <GridItem display='flex' m='0 auto' flexDirection='column' justifyContent='center' colSpan='5'>
            <VStack>
            <Text w='100%' className='hvr-skew-forward animate__animated animate__fadeIn animate__slow animate__delay-1s' textAlign='start' ml='3'  fontSize='2xl'>{lan.greeting}</Text>
            <Text w='100%' className='hvr-grow hoverName animate__animated animate__fadeIn animate__slow animate__delay-1s' textAlign='center' fontFamily={'Nunito'} fontSize='8xl'>Luis Gumiel</Text>
            <Text w='100%' className='hvr-float-shadow2 animate__animated animate__fadeIn animate__slow animate__delay-1s' pl='3' textAlign='center' marginTop='0' fontSize='3xl' color='mainGreen'>{lan.job}</Text>
            <HStack as='div' mt='5' spacing='50px' w='100%' display='flex' justifyContent='center'>
              <a href="https://github.com/luchio" target="_blank">
                <img className='grow animate__animated animate__fadeIn animate__slow animate__delay-1s' style={{marginTop:'20px',cursor:'pointer'}} src="../assets/icons/github.png" alt="" width='30px' />
              </a>
              <a href="https://linkedin.com/in/luis-enrique-gumiel-pardo-50596b22b" target="_blank">
                <img className='grow animate__animated animate__fadeIn animate__slow animate__delay-1s' style={{marginTop:'20px',cursor:'pointer'}} src="../assets/icons/linkedin.png" alt="" width='30px' />
              </a>
            </HStack>
            </VStack>
        </GridItem>
    </Grid>
  )
}
