import { AbsoluteCenter,Card, CardBody, CardFooter, Center, Grid, GridItem, HStack, Heading, Image, Stack, Text, Wrap, WrapItem, useDisclosure } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {ModalProjects } from '../components/ModalProjects'
import { EN, ES } from '../helpers/Traductor';
import { LanguageContext } from '../context/LanguageContext';

export const Experience = () => {

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [titleModal, setContentTitleModal] = useState("");
  const [contentModal, setContentModal] = useState("");

  const {language} = useContext(LanguageContext);
  const [lan, setLan] = useState(ES[4])

  useEffect(() => {
    if(language === 'ES'){
      setLan(ES[4])
    } else {
      setLan(EN[4])
    }
  }, [language])

  const handleModal = (e,text,title) =>{
    onOpen();
    setContentModal(text)
    setContentTitleModal(title)
  }

  return (
    <>
    <Grid w='100%' templateColumns={'repeat(1,1fr)'} h='100vh' display='flex' justifyContent={'center'}  className='animate__animated animate__fadeIn animate__slow' zIndex={1}>
      <GridItem colSpan={1}>
          <AbsoluteCenter  w='100%' h='60%' px='10'>
          <Heading w='100%' textAlign={'center'} className='hvr-shrink' fontFamily='Nunito' as='h1' mb={'20'} size={'3xl'} color={'mainGreen'}>{lan.title}</Heading>
          <Wrap display='flex'  justifyContent={'center'} w='100%'>
            {lan.projects.map((project,index) => (
              <WrapItem display='flex' justifyContent={'center'} key={index}>
                  <Card maxW='xs' backgroundColor='black'>
                      <CardBody>
                      <HStack display={'flex'} justifyContent={'center'}>
                     
                        <Text textAlign={'center'} size='1xl' color={'white'} mr={10} mb={10}>{project.title}</Text>
                     
                      <a href={project.github} target='_blank'>
                            <img style={{marginBottom:'40px',marginLeft:'40px'}} src="../assets/icons/github-small.png" alt="" />
                      </a>
                      <a href={project.url} target='_blank'>  
                            <img style={{marginBottom:'40px',marginLeft:'10px'}} src="../assets/icons/link-small.png" alt="" />
                      </a>
                      </HStack>
                        <Image
                          onClick={(e) =>handleModal(e,project.description,project.title)}
                          objectFit={'cover'}
                          className='proyect-img'
                          src={`../assets/img/${project.img}`}
                          alt='Green double couch with wooden legs'
                          borderRadius='lg'
                        />
                        <HStack display='flex' justifyContent='center' w='100%' mt='8' mb={'4'} spacing='3'>
                          {
                            project.buildIn.map((tech, index) =>(
                              <img key={index} width='30px' height='30px' src={`../assets/icons/${tech}`} alt="" />                    
                            ))
                          }
                                             
                        </HStack>        
                      </CardBody>
                  </Card> 
              </WrapItem>
            ))}
            </Wrap>
          </AbsoluteCenter>
      </GridItem>
    <ModalProjects isOpen={isOpen} onClose={onClose} text={contentModal} title={titleModal} />
    </Grid>
  </>
  )
}
