import React from 'react'

const Tracking = () => {
  return (
    <section className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6">
          <div className="card shadow border-0 p-4">
            <h1 className="mb-3 text-center">Seguimiento de pedido</h1>
            
            <p className="text-muted text-center mb-4">
              Ingresa tu número de pedido para consultar el estado actual, historial de movimientos y detalles de tu envío.
            </p>

            <div className="mb-4">
              <input
                className="form-control form-control-lg"
                type="text"
                placeholder="Ej. OV-123456"
              />
            </div>

            <button className="btn btn-primary w-100 mb-4">
              Consultar pedido
            </button>

            {/* Resultado ejemplo */}
            <div className="border-top pt-4">
              <h5 className="mb-3">Historial del envío</h5>

              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <strong>Pedido creado</strong>
                  <br />
                  <small className="text-muted">12 Mar 2026 - 10:32 AM</small>
                </li>

                <li className="list-group-item">
                  <strong>En producción</strong>
                  <br />
                  <small className="text-muted">13 Mar 2026 - 02:15 PM</small>
                </li>

                <li className="list-group-item">
                  <strong>Enviado</strong>
                  <br />
                  <small className="text-muted">15 Mar 2026 - 09:00 AM</small>
                </li>

                <li className="list-group-item">
                  <strong>En tránsito</strong>
                  <br />
                  <small className="text-muted">16 Mar 2026 - 01:45 PM</small>
                </li>

                <li className="list-group-item">
                  <strong>Entregado</strong>
                  <br />
                  <small className="text-muted">18 Mar 2026 - 11:20 AM</small>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tracking