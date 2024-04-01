const BannerHoras = () => {
  return (
    <div className="container flex row align-items-center text-center mb-5">
      <div className="row">
        <div className="col-4 shadow-sm p-3 bg-white rounded">
          <div className="banner-leyenda">Horas Totales</div><strong>18 Horas</strong>
        </div>
        <div className="col-4 shadow-sm p-3 bg-white rounded">
          <div className="banner-leyenda">Horas Lectivas</div><strong>18 Horas</strong>
        </div>
        <div className="col-4 shadow-sm p-3 bg-white rounded">
          <div className="banner-leyenda">Horas Complementarias</div><strong>0 Horas</strong>
        </div>
      </div>
    </div>
  );
};

export default BannerHoras;
