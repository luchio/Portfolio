import { Flex, Grid } from '@chakra-ui/react'
import React from 'react'

export const Loader = () => {

 

  return (
    <Flex backgroundColor={'black'} w={'100%'} h={'100vh'} boxSizing='border-box' as={'div'} 
      flexDirection='column' justifyContent='center'>
        <span style={{margin:'0 auto'}} className="loader"></span>
    </Flex>
  )
}
