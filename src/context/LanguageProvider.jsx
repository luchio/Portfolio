import React, { useState } from 'react'
import { LanguageContext } from './LanguageContext'

export const LanguageProvider = ({children}) => {

    const [language, setLanguage] = useState("ES")

  return (
    <LanguageContext.Provider value={{language,setLanguage}}>
        {children}
    </LanguageContext.Provider>
  )
}
