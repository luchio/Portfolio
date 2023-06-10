import { AbsoluteCenter, Center, Grid, GridItem, HStack, Heading, Text, VStack, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../context/LanguageContext';
import { EN, ES } from '../helpers/Traductor';


export const AboutMe = () => {

  const {language} = useContext(LanguageContext);
  const [lan, setLan] = useState(ES[2])
  const [screen] = useMediaQuery('(min-width: 900px)')
  const [screenLetter] = useMediaQuery('(min-width: 650px)')

  useEffect(() => {
    if(language === 'ES'){
      setLan(ES[2])
    } else {
      setLan(EN[2])
    }
  }, [language])
  

  
  return (

   <Grid templateColumns={ `${screen ? 'repeat(3,1fr)' : 'repeat(1,1fr)'}  `} h='100vh'  className='animate__animated animate__fadeIn animate__slow' zIndex={1}>
      <GridItem display='flex' flexDirection='column' justifyContent='center'  colSpan={screen ? 2 : 3 }>
         <Grid h='60%'>
          <VStack display='flex' px='18'  h='100%' flexDirection='column' justifyContent='start'>
          <Heading className='hvr-shrink' fontFamily='Nunito' as='h1' mb={'10'} size={'4xl'} color={'mainGreen'}>{lan.title}</Heading>
          <Text px={screenLetter ? 20 : 0} mb={'28'}  fontSize={ screenLetter ? '2xl' : '1xl'}>
          {lan.description}
          </Text>      
          </VStack>
         </Grid>
      </GridItem>
      <GridItem h='100%' colSpan={1}>
      <VStack w={'100%'} h='100%' pt='10' mt={'20'} display='flex' flexDirection='column' justifyContent='center'>
            <a href={`/pdf/${language === 'ES' ?"CVEs" :"CVEn"}.pdf`} download>
          <Center>
            <img className='hvr-wobble-skew' src="../assets/icons/curriculum-vitae.png" alt=""/>
          </Center>
            <Text  color={'mainGreen'}>{lan.downloadText}</Text></a>
      </VStack>
      </GridItem>
     <GridItem colSpan={3} w='95%' mt='150px' display='flex' flexDirection='column' justifyContent='center'>
     <Heading textAlign={'center'} className='hvr-grow animate__animated animate__fadeIn animate__slow animate__delay-1s' 
          fontFamily='Nunito' as='h1' py={'2'} size={'2xl'} color={'mainGreen'}>{lan.title2}</Heading>
          <HStack as='div' pb={'10'} mt='5' spacing='50px' w='100%' display='flex' justifyContent='center'>
                <VStack>
                  <a href="https://github.com/luchio" target='_blank'>
                    <img className='grow' style={{marginTop:'20px'}} src="../assets/icons/github.png" alt="" width='40px' />
                  </a>
                </VStack>
                <VStack>
                  <a href="https://linkedin.com/in/luis-enrique-gumiel-pardo-50596b22b" target='_blank'>
                    <img className='grow' style={{marginTop:'20px'}} src="../assets/icons/linkedin.png" alt="" width='40px' />
                  </a>
                </VStack>
          </HStack>
     </GridItem>
   </Grid>
  )
}
