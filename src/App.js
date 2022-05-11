import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './components/home/Home';
import List from './components/list/List';
import Login from './components/login/Login';
import View from './components/view/View';
import NotFound from './components/notFound/NotFound';

function App() {
  return (
    <Routes>
          <Route path="/" element={<Home />} />
          <Route path="list" element={<List />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="view" element={<View />} />
        
    </Routes>
  );
}

export default App;
