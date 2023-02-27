import { Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./components/pages/Home/Home"
import PostEdit from './components/pages/PostEdit/PostEdit';
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";

const App = () => {
  return (
    <Container>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/edit/:id" element={<PostEdit />} />
      </Routes>
      <Footer />
    </Container>
  );
}
export default App;