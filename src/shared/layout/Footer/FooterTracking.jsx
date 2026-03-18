import React from 'react'

const FooterTracking = () => {
  return (
    <div className="bg-primary p-3">
        <div className="container text-center">
            <div className="row justify-content-center align-items-center text-center">
                <div className="col-12 col-md-4 col-lg-4 d-flex flex-column align-items-center justify-content-center text-center">
                    <img src="https://www.gdiuniformes.com/wp-content/uploads/2022/05/logo_gdi_2022_transparente_blanco.png" className="p-3" alt="Logo GDI Uniformes" width={150} />
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center">
                    <a href="https://www.gdiuniformes.com/" className="text-white link-underline link-underline-opacity-0">www.gdiuniformes.com</a>
                </div>
                <div className="col-12 col-md-4 col-lg-4 d-flex justify-content-center align-items-center text-center">
                    <span className="text-white" style={{ fontSize: '0.8rem' }}>&copy;2026 | GDI Uniformes. Todos los derechos reservados.</span>
                </div> 
            </div>
        </div>
    </div>
  )
}

export default FooterTracking