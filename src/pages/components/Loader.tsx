const Loader = () => {
  return (
    <div className={`preloader`}>
      <div id="global">
        <div id="top" className="mask">
          <div className="plane"></div>
        </div>

        <div id="middle" className="mask">
          <div className="plane"></div>
        </div>

        <div id="bottom" className="mask">
          <div className="plane"></div>
        </div>

        <p>
          <i>Carregando...</i>
        </p>
      </div>
    </div>
  );
};

export default Loader;
