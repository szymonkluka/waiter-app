import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home"
import PostEdit from './components/pages/PostEdit/PostEdit';
import PostForm from './components/features/PostForm/PostForm';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import { useEffect } from 'react';
import { fetchData } from './redux/postsRedux';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/post/:id' element={<PostForm />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />

      </Routes>
      <Footer />
    </Container>
  );
}
export default App;