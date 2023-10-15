import { createContext, ReactNode, useContext, useState } from 'react'

interface CountryContextProps {
  selectedCountry: string
  setSelectedCountry: React.Dispatch<React.SetStateAction<string>>
}

interface CountryProviderProps {
  children: ReactNode
}

const CountryContext = createContext<CountryContextProps | undefined>(undefined)

export const useCountry = () => {
  const context = useContext(CountryContext)
  if (!context) {
    throw new Error('useCountry must be used within a CountryProvider')
  }
  return context
}

export const CountryProvider: React.FC<CountryProviderProps> = ({
  children,
}) => {
  const [selectedCountry, setSelectedCountry] = useState('us')

  return (
    <CountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </CountryContext.Provider>
  )
}
