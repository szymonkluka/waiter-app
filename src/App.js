import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home"
import TableEdit from './components/pages/TableEdit/TableEdit';
import TableForm from './components/features/TableForm/TableForm';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { fetchData } from './redux/postsRedux';
import { useDispatch } from 'react-redux';
import ClipLoader from "react-spinners/ClipLoader";

const App = () => {

  setTimeout(() => {
    <ClipLoader
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  }, 2000);

  const dispatch = useDispatch();
  dispatch(fetchData());

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/table/:id' element={<TableForm />} />
        <Route path="/table/edit/:id" element={<TableEdit />} />
      </Routes>
      <Footer />
    </Container>
  );
}
export default App;