import React from "react";
import "./styles/footer.css";

const PieDePagina = () => {
  return (
    <footer>
      <div>
        <h5 className="TextoFooter">
          Todos los derechos reservados 2003-2021. República Argentina. INCAA
        </h5>
        <h5 className="TextoFooter">
          Lima 319; Código Postal: C1073AAG, CABA; República Argentina.
        </h5>
      </div>
      <div>
        <ul className="ImgFooterul">
          <li>
            <a href="">
              <img
                className="ImgFooter"
                src="http://cine.ar/img/logo-cinear.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img
                className="ImgFooter"
                src="http://cine.ar/img/logo-arsat.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="">
              <img src="http://cine.ar/img/logo-incaa.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PieDePagina;
