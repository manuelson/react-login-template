import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from "src/context/AuthContext";
import 'font-awesome/css/font-awesome.min.css';
import { Analytics } from "@vercel/analytics/react"

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider.Provider>
        <App />
        <Analytics />
    </AuthProvider.Provider>,
)
