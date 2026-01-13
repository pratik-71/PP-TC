import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MemoriesPP from './projects/Memories/PP';
import MemoriesTC from './projects/Memories/TC';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-purple-500 selection:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Memories Project Routes */}
          <Route path="/memories/privacy-policy" element={<MemoriesPP />} />
          <Route path="/memories/terms-conditions" element={<MemoriesTC />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
