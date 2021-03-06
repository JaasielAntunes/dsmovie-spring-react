import Navbar from 'components/NavBar';
import Form from 'pages/Form';
import Listing from 'pages/Listing';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Listing />} />
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
