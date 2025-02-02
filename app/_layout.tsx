import AuthStoreProvider, { AuthStoreContext } from '@/contexts/AuthContext'
import { Slot } from 'expo-router'

export default function RootLayout() {

  return (
    <AuthStoreProvider>
       <Slot /> 
    </AuthStoreProvider>    
  )
}