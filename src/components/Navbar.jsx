import { Button, Flex, Icon, IconButton, Stack, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { LanguageContext } from '../context/LanguageContext';
import { EN, ES } from '../helpers/Traductor';
import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons';

export const Navbar = () => {

  const {language} = useContext(LanguageContext);
  const [lan, setLan] = useState(ES[1])
  const [display, changeDisplay] = useState('none')

  useEffect(() => {
    if(language === 'ES'){
      setLan(ES[1])
    } else {
      setLan(EN[1])
    }
  }, [language])

  


  return (  
   <>
     <Stack display={['none','none','flex','flex']} className='animate__animated animate__fadeInDown animate__slow' zIndex={1} style={{backgroundColor:'black',borderRadius:'10%', marginTop:'20px'}} position='fixed' right='5%' top='0%' backgroundColor='black' spacing={4} direction='row' align='center'>
        <NavLink style={{textDecoration: 'none'}} to={'/'}>
        <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
            <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/home.png" alt="" />
            <Text color='mainGreen'>{lan.home}</Text>
        </Button>
        </NavLink>
        <NavLink style={{textDecoration: 'none'}} to={'/about-me'}>
        <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
            <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/profile-user.png" alt="" />
            <Text color='mainGreen'>{lan.aboutMe}</Text>
        </Button>
        </NavLink>
        <NavLink style={{textDecoration: 'none'}} to={'/skills'}>
        <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
            <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/abilities.png" alt="" />
            <Text color='mainGreen'>{lan.skills}</Text>
        </Button>
        </NavLink>
        <NavLink style={{textDecoration: 'none'}} to={'/projects'}>
        <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
            <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/portfolio.png" alt="" />
            <Text color='mainGreen'>{lan.projects}</Text>
        </Button>
        </NavLink>
    </Stack>
     <IconButton
     aria-label=''
     variant='outline'
     colorScheme='mainGreen'
     style={{
      
     }}
     size='lg'
     mr={2}
     icon={<HamburgerIcon/>}
     color='mainGreen'
     
     backgroundColor={'black'}
     position='fixed' right='5%' top='0%'
     display={['flex','flex','none','none']}
     zIndex={10}
     onClick={() => changeDisplay('flex')}
     />

     <Flex display={display} w={'100vw'} bgColor={'black'} zIndex={20} h={'100vh'} 
     pos={'fixed'} top={'0'} left={'0'}overflow={'auto'} flexDir={'column'}>
      <Flex justify={'flex-end'}>
        <IconButton
        mt={2} mr={2} size={'lg'}
        colorScheme='mainGreen'
        color='mainGreen'
        backgroundColor='black'
        onClick={() => changeDisplay('none')}
        icon={<CloseIcon/>
        }
        />
      </Flex>
      <Flex gap={7} onClick={() => changeDisplay('none')} flexDir={'column'} align={'center'} className='animate__animated animate__fadeIn animate__slow' zIndex={1} style={{backgroundColor:'black',borderRadius:'10%', marginTop:'20px'}} backgroundColor='black'>
            <NavLink style={{textDecoration: 'none'}} to={'/'}>
            <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
                <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/home.png" alt="" />
                <Text color='mainGreen'>{lan.home}</Text>
            </Button>
            </NavLink>
            <NavLink style={{textDecoration: 'none'}} to={'/about-me'}>
            <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
                <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/profile-user.png" alt="" />
                <Text color='mainGreen'>{lan.aboutMe}</Text>
            </Button>
            </NavLink>
            <NavLink style={{textDecoration: 'none'}} to={'/skills'}>
            <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
                <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/abilities.png" alt="" />
                <Text color='mainGreen'>{lan.skills}</Text>
            </Button>
            </NavLink>
            <NavLink style={{textDecoration: 'none'}} to={'/projects'}>
            <Button border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
                <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/portfolio.png" alt="" />
                <Text color='mainGreen'>{lan.projects}</Text>
            </Button>
            </NavLink>
      </Flex>
     </Flex>
   </>
  ) 
}
