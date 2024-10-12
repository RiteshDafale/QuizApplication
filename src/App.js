import logo from './logo.svg';
import './App.css';
import Qrscanner from './component/QrCode';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import Question from './component/question/Question'
import Home from './component/Homepage/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from './component/Context/Context';


function App() {
  // const [data, setData] = useState('No result');

  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Qrscanner />} />
            <Route path='/QuizApplication' element={<Home />} />
            <Route path='/question' element={<Question />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
