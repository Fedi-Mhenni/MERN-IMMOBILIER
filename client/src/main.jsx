import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'  // import correct
import './index.css'
import App from './App.jsx'
import { store, persistor } from './redux/store.js'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'


const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>
)
