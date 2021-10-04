import React from "react";
import "./styles/footer.css";

const PieDePagina = () => {
  return (
    <footer>
      <div>
        <h6 className="TextoFooter">
          Todos los derechos reservados 2003-2021. República Argentina. INCAA{" "}
          <br />
          Lima 319; Código Postal: C1073AAG, CABA; República Argentina.
        </h6>
      </div>
      <div>
        <ul className="ImgFooterul">
          <li>
            <a href="http://cine.ar/">
              <img
                className="ImgFooter"
                src="http://cine.ar/img/logo-cinear.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="https://www.arsat.com.ar/">
              <img
                className="ImgFooter"
                src="http://cine.ar/img/logo-arsat.svg"
                alt=""
              />
            </a>
          </li>
          <li>
            <a href="http://www.incaa.gob.ar/">
              <img src="http://cine.ar/img/logo-incaa.svg" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default PieDePagina;
