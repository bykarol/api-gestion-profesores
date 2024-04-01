import Header from '../components/Header';
import NavMenu from '../components/NavMenu';
import ProfesorPage from './ProfesorPage';

function HomePage() {

  return (
    <>
      <div className="container flex row pt-4" id='home-page'>
        <div className="col-3" id='menu'>
          <NavMenu />
        </div>
        <div className="col-9">
          <Header />
          <hr />
          <ProfesorPage />
        </div>
      </div >
    </>
  )
}

export default HomePage
