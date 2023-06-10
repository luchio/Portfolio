import { ChakraProvider} from '@chakra-ui/react';
import { AppRouter } from './router/AppRouter';
import theme from './theme/theme';
import { LanguageProvider } from './context/LanguageProvider';

export const AppPorfolio = () => {


  return (
    <LanguageProvider>
      <ChakraProvider theme={theme}>
          <AppRouter/>
      </ChakraProvider>
    </LanguageProvider>
  )
}
