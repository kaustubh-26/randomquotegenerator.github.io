import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'
import Header from './Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Header />
    <App />
  </Provider>,
)
