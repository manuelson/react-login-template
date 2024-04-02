import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AuthProvider from "src/context/AuthContext";
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <AuthProvider.Provider>
        <App />
    </AuthProvider.Provider>,
)
