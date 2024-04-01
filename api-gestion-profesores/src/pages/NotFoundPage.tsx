import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="container flex text-center">
      <h2>Página no encontrada</h2>
      <Link to={"/"}><span>Volver al home</span></Link>
    </div>
  )
}

export default NotFoundPage;