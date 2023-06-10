import { AbsoluteCenter, Center, Grid, GridItem, HStack, Heading, List, ListIcon, ListItem, Text, UnorderedList, Wrap, WrapItem, useMediaQuery } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { EN, ES } from '../helpers/Traductor';
import { LanguageContext } from '../context/LanguageContext';

export const Skills = () => {

  const {language} = useContext(LanguageContext);
  const [lan, setLan] = useState(ES[3])
  const [screenLetter] = useMediaQuery('(min-width: 800px)')

  useEffect(() => {
    if(language === 'ES'){
      setLan(ES[3])
    } else {
      setLan(EN[3])
    }
  }, [language])

  return (
    <Grid templateColumns={'repeat(1,1fr)'} height={'100vh'}  className='animate__animated animate__fadeIn animate__slow' zIndex={1}>
      <GridItem colSpan={1} h='100%' >
        <AbsoluteCenter w='100%' h={'100%'} style={{marginTop:'120px'}} px='20'>
        <Heading w='100%' textAlign={'center'} className='hvr-shrink' fontFamily='Nunito' as='h1' mb={'20'} size={screenLetter ? '3xl' : '2xl'}  color={'mainGreen'}>{lan.title}</Heading>
          <Wrap p='3' w='100%' spacing='100px'>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}}   width="100px" heigth="100px" src="../assets/icons/html-5.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}}  width="100px" heigth="100px" src="../assets/icons/css-3.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}}  className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/js.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/reactIcon.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/Redux.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow"  display='flex' flexDirection='column' justifyContent='center'>
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/nodeJS.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/mongoIcon.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/mysql.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow" display='flex' flexDirection='column' justifyContent='center'>
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="150px" heigth="100px" src="../assets/icons/ChakraIcon.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/MUIIcon.png" alt="" />
            </WrapItem>
            <WrapItem style={screenLetter? {} :{width:'100%',display:'flex',flexDirection:'column',justifyContent:'center'}} className="hvr-grow">
              <img style={screenLetter? {} :{width:'100px',alignSelf:'center'}} width="100px" heigth="100px" src="../assets/icons/BStrapIcon.png" alt="" />
            </WrapItem>
          </Wrap>
          <Heading w='100%' textAlign={'center'} className='hvr-shrink' 
          fontFamily='Nunito' as='h1' mt={'20'} mb={'20'} size={screenLetter ? '3xl' : '2xl'} color={'mainGreen'}>{lan.title2}</Heading>
          <Center pl={'10'}>
          <UnorderedList listStyleType='none' p={'1'} mb='10' spacing={5}>
              <ListItem><HStack gap={4}><img width={screenLetter? '' : '17px'} src="../assets/icons/right-arrow.png" alt="" /><Text className='hvr-grow'  fontSize={screenLetter ? '3xl' : '1xl'}>{lan.skill1}</Text></HStack></ListItem>
              <ListItem><HStack  gap={4}><img width={screenLetter? '' : '17px'}  src="../assets/icons/right-arrow.png" alt="" /><Text className='hvr-grow' fontSize={screenLetter ? '3xl' : '1xl'}>{lan.skill2}</Text></HStack></ListItem>
              <ListItem><HStack  gap={4}><img width={screenLetter? '' : '17px'} src="../assets/icons/right-arrow.png" alt="" /><Text className='hvr-grow' fontSize={screenLetter ? '3xl' : '1xl'}>{lan.skill3}</Text></HStack></ListItem>
              <ListItem><HStack  gap={4}><img width={screenLetter? '' : '17px'} src="../assets/icons/right-arrow.png" alt="" /><Text className='hvr-grow' fontSize={screenLetter ? '3xl' : '1xl'}>{lan.skill4}</Text></HStack></ListItem>
              <ListItem><HStack  gap={4}><img width={screenLetter? '' : '17px'} src="../assets/icons/right-arrow.png" alt="" /><Text className='hvr-grow' fontSize={screenLetter ? '3xl' : '1xl'}>{lan.skill5}</Text></HStack></ListItem>
        </UnorderedList>
          </Center>
        </AbsoluteCenter>
      </GridItem>
    </Grid>
  )
}
