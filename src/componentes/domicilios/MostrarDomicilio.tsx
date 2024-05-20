import '../../slick-theme.css';
import Domicilio from '../../entidades/Domicilio';

type DomiciliosArgs = {
    domicilioPrevio: Domicilio,
    editar?: boolean,
    handleOpenModal: (value: Domicilio) => void,
    handleDelete: (id: number) => void,
}

function MostrarDomicilio({domicilioPrevio, editar = false, handleOpenModal, handleDelete}:DomiciliosArgs) {
    return (
    <div className="mb-3 row">

        <div className="card">
        <div className="card-body row">
            <div className="col">
                <h5 className="card-title">Domicilio</h5>
                <h6 className="card-subtitle mb-2 text-muted">{domicilioPrevio.calle} {domicilioPrevio.numero}</h6>
                <p className="card-text">Código postal: {domicilioPrevio.cp}, Localidad: {domicilioPrevio.localidad.nombre}</p>
            </div>
            {editar && 
            <div className="col-2">
                <div className="d-flex flex-column justify-content-end">
                    <a className="btn btn-info" style={{ marginBottom: 10 }} onClick={() => handleOpenModal(domicilioPrevio)}>Modificar</a>
                    <a className="btn btn-danger" style={{ marginBottom: 10 }} onClick={() => handleDelete(domicilioPrevio.id)}>Eliminar</a>
                </div>
            </div>
            }
        </div>
        </div>
    </div>
    );
}

export default MostrarDomicilio;