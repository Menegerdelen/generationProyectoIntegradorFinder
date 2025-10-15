
import logoFinder from "../../assets/img/logosFinder/logoFinder.png"
import './footer.css'

export const Footer = () => {
    return (
        <footer className="colorPrimario text-light " data-bs-theme="dark">
            {/* Sección principal del footer */}
      <div className="container py-5">
        <div className="row g-4">
          {/* Columna de la marca */}
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center mb-3">
              <img 
                src={ logoFinder } 
                alt="Finder Logo" 
                className="me-2" id="logoFooter"
              />
              <h3 className="fw-bold mb-0">FINDER</h3>
            </div>
            <p className="text-muted mb-3">
              Conectamos talentos con oportunidades. Tu próximo gran descubrimiento profesional comienza aquí.
            </p>
            <div className="d-flex gap-3">
              <a href="https://www.youtube.com" className="text-light" aria-label="YouTube">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 640 640">
                  <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com" className="text-light" aria-label="Facebook">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 640 640">
                  <path d="M576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 440 146.7 540.8 258.2 568.5L258.2 398.2L205.4 398.2L205.4 320L258.2 320L258.2 286.3C258.2 199.2 297.6 158.8 383.2 158.8C399.4 158.8 427.4 162 438.9 165.2L438.9 236C432.9 235.4 422.4 235 409.3 235C367.3 235 351.1 250.9 351.1 292.2L351.1 320L434.7 320L420.3 398.2L351 398.2L351 574.1C477.8 558.8 576 450.9 576 320z"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com" className="text-light" aria-label="LinkedIn">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 640 640">
                  <path d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"/>
                </svg>
              </a>
              <a href="https://www.instagram.com" className="text-light" aria-label="Instagram">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 640 640">
                  <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Columna de navegación rápida */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Navegación</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/" className="text-muted text-decoration-none">Inicio</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Servicios</a>
              </li>
              <li className="mb-2">
                <a href="/mapa" className="text-muted text-decoration-none">Mapa de Universidades</a>
              </li>
              <li className="mb-2">
                <a href="/quien-somos" className="text-muted text-decoration-none">Contacto</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Blog</a>
              </li>
            </ul>
          </div>

          {/* Columna de servicios */}
          <div className="col-lg-2 col-md-6">
            <h5 className="fw-bold mb-3">Servicios</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="/baes" className="text-muted text-decoration-none">BAES</a>
              </li>
              <li className="mb-2">
                <a href="carreras" className="text-muted text-decoration-none">Carreras</a>
              </li>
              <li className="mb-2">
                <a href="/paes" className="text-muted text-decoration-none">PAES</a>
              </li>
              <li className="mb-2">
                <a href="/tne" className="text-muted text-decoration-none">TNE</a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-muted text-decoration-none">Evaluaciones</a>
              </li>
            </ul>
          </div>

          {/* Columna de contacto */}
          <div className="col-lg-4 col-md-6 ">
            <h5 className="fw-bold mb-3">Contacto</h5>
            <div className="mb-3">
              <div className="d-flex align-items-center mb-2">
                <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                </svg>
                <span className="text-muted">Santiago, RM, Chile</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 14H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"/>
                </svg>
                <span className="text-muted">contacto@finder.cl</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122L9.98 10.22c-.197.099-.42.107-.622.028-.2-.078-.382-.216-.52-.383a3.264 3.264 0 0 1-.645-1.458l-.242-.966a.678.678 0 0 0-.122-.58L5.035 4.293a.678.678 0 0 0-1.015.063L3.654 1.328z"/>
                </svg>
                <span className="text-muted">+56 9 1234 5678</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="mt-4">
              <h6 className="fw-bold mb-3">Newsletter</h6>
              <div className="input-group">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Tu email"
                />
                <button className="btn btn-primary" type="button">
                  Suscribirse
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sección inferior del footer */}
      <div className="border-top border-secondary">
        <div className="container py-3">
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="text-muted mb-0">
                © 2025 Finder. Todos los derechos reservados.
              </p>
            </div>
            <div className="col-md-6 text-md-end">
              <div className="d-flex justify-content-md-end gap-4">
                <a href="#" className="text-muted text-decoration-none">Política de Privacidad</a>
                <a href="#" className="text-muted text-decoration-none">Términos de Uso</a>
                <a href="#" className="text-muted text-decoration-none">Cookies</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        </footer>
    )
}
