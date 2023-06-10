import { Button, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { LanguageContext } from '../context/LanguageContext';

export const Lenguage = () => {
    const {language,setLanguage} = useContext(LanguageContext);

    const handleButton = () =>{
        if(language === 'ES'){
            setLanguage('EN');
            return;
        } 
        setLanguage('ES')  
    }

  return (
    <Stack className='animate__animated animate__fadeInDown animate__slow' zIndex={1} style={{backgroundColor:'black',borderRadius:'10%', marginTop:'20px'}} position='fixed' left='5%' top='0%' backgroundColor='black' spacing={4} direction='row' align='center'>
        <Button onClick={handleButton} border='1px' borderColor='mainGreen' colorScheme='black' size='sm'>
            <img width='15px' height='15px' style={{marginRight:'10px'}} src="../assets/icons/language.png" alt="" />
            <Text color='mainGreen'>{language}</Text>
        </Button>
    </Stack>
  )
}
