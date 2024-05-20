import Base from "../../entidades/Base";
import { Button } from "@mui/material";
export type GrillaGenericaTableProps<T> = {
  entidades: T[],
  labels: string[],
  categoria: number,
  keys: Array<keyof T>,
  openModalPedidos: () => void,
  handleOpenModal: (id: number) => void,
  deleteEntidad: (id: number) => void,
  sinEditar: boolean
};

function CardGenericaCard<T extends Base>({
  entidades,
  categoria,
  handleOpenModal,
  deleteEntidad,
  sinEditar
}: GrillaGenericaTableProps<T>) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 justify-content-center">
      {entidades.filter(entidadI => (categoria === 0 || entidadI.categoria.id === categoria)).map((entidadI: T) => (
        <div key={entidadI.id} className="col">
          <div className="card" style={{ width: "18rem",backgroundColor:"#e0ebc2" }}>
            <div className="d-flex justify-content-between m-3">
              {!sinEditar && (
                <Button
                  style={{ letterSpacing: "1px", fontWeight: "bold",backgroundColor:"#a6c732" }}
                  className="custom-button"
                  variant="contained"
                  color="primary"
                  onClick={() => { handleOpenModal(entidadI.id) }}
                >Modificar
                </Button>
              )}
              <Button
                style={{ letterSpacing: "1px", fontWeight: "bold",backgroundColor:"#dd5555"}}
                className="custom-button"
                variant="contained"
                color="primary" 
                onClick={() => deleteEntidad(entidadI.id)}>Eliminar 
                </Button>
            </div>

            <img src={entidadI.imagen.url} className="card-img-top" style={{ height: '200px' }} alt="..." />
            <div className="card-body">
              <h5 className="card-title">{entidadI.nombre}</h5>
              <p className="card-text">{entidadI.razonSocial}</p>
              <p className="card-text">{entidadI.cuil}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardGenericaCard;
