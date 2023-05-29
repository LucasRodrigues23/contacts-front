import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/userContext.tsx'
import { ContactProvider } from './contexts/contactsContext.tsx'
import { Global } from './styles/GlobalStyles.ts'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ContactProvider>
          <App />
        </ContactProvider>
      </UserProvider>
      <Global />
    </BrowserRouter>
  </React.StrictMode>
)
