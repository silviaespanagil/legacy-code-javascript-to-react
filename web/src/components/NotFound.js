import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
const NotFound = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Link to="/card">Volver</Link>
        <h2>Página no encontrada</h2>
      </main>
      <Footer />
    </>
  );
};
export default NotFound;
