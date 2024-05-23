import Base from "../../entidades/Base";
import Domicilio from "../../entidades/Domicilio";
import { Button } from "@mui/material";

export type GrillaGenericaTableProps<T> = {
  entidades: T[];
  labels: string[];
  categoria: number;
  keys: Array<keyof T>;
  openModalPedidos: () => void;
  openModalDomicilios: (domicilios: Domicilio[]) => void;
  cambiarBooleano: (value: number, atributo: string) => void;
  handleOpenModal: (id: number) => void;
  deleteEntidad: (id: number) => void;
  sinEditar: boolean;
};

function GrillaGenericaTable<T extends Base>({
  entidades,
  labels,
  categoria,
  keys,
  openModalPedidos,
  openModalDomicilios,
  cambiarBooleano,
  handleOpenModal,
  deleteEntidad,
  sinEditar,
}: GrillaGenericaTableProps<T>) {
  return (
    <table className="table table-striped text-center">
      <thead>
        <tr>
          {labels &&
            labels.map((label: string, index: number) => (
              <th
                style={{ textAlign: "center", backgroundColor: "#a6c732" }}
                key={index}
                scope="col"
                hidden={[
                  "Id",
                  "Imágen",
                  "Imágenes",
                  "Cargar detalles",
                  "Tiene sucursales",
                  "Promociones",
                ].includes(label)}
              >
                <b>{label}</b>
              </th>
            ))}
          {!sinEditar && (
            <th
              style={{ textAlign: "center", backgroundColor: "#a6c732" }}
              scope="col"
            >
              <b>Modificar</b>
            </th>
          )}
          <th
            style={{ textAlign: "center", backgroundColor: "#a6c732" }}
            scope="col"
          >
            <b>Eliminar</b>
          </th>
        </tr>
      </thead>
      <tbody>
        {entidades
          .filter(
            (entidadI) => categoria === 0 || entidadI.categoria.id === categoria
          )
          .map((entidadI: T) => (
            <tr key={entidadI.id}>
              {keys.map((key, index) => (
                <td
                  key={index}
                  hidden={[
                    "id",
                    "imagen",
                    "imagenes",
                    "articuloManufacturadoDetalles",
                    "sucursales",
                    "promocionDetalles",
                    "type",
                    "promociones",
                  ].includes(String(key))}
                >
                  {!["esParaElaborar", "casaMatriz"].includes(String(key)) ? (
                    !["domicilios", "pedidos"].includes(String(key)) ? (
                      <b>
                        {typeof entidadI[key] === "object"
                          ? entidadI[key]?.denominacion ||
                            entidadI[key]?.nombre ||
                            entidadI[key]?.calle + " " + entidadI[key]?.numero
                          : typeof entidadI[key] === "number"
                          ? entidadI[key].toLocaleString("es-AR")
                          : entidadI[key]}
                      </b>
                    ) : (
                      <a
                        className="btn btn-dark"
                        style={{ marginBottom: 10 }}
                        onClick={() => {
                          key === "pedidos"
                            ? openModalPedidos()
                            : openModalDomicilios(entidadI.domicilios);
                        }}
                      >
                        {" "}
                        {labels[index]}{" "}
                      </a>
                    )
                  ) : (
                    <a
                      className={
                        entidadI[key] ? "btn btn-success" : "btn btn-dark"
                      }
                      style={{
                        width: "100px",
                        marginBottom: "10px",
                        backgroundColor: entidadI[key] ? "#a6c732" : "#e05151",
                        color: "#ffffff", // Color del texto
                        border: "none",
                        padding: "5px 20px",
                        borderRadius: "4px",
                        textAlign: "center",
                        textDecoration: "none",
                        display: "inline-block",
                      }}
                      onClick={() => {
                        cambiarBooleano(entidadI.id, String(key));
                      }}
                    >
                      {entidadI[key] ? "Sí" : "No"}
                    </a>
                  )}
                </td>
              ))}
              {!sinEditar && (
                <td>
                  <Button
                    style={{
                      letterSpacing: "1px",
                      fontWeight: "bold",
                      backgroundColor: "#a6c732",
                      color: "#FFFFBF",
                    }}
                    className="custom-button"
                    variant="contained"
                    color="primary"
                    onClick={() => {
                      handleOpenModal(entidadI.id);
                    }}
                  >
                    Modificar
                  </Button>
                </td>
              )}
              <td>
                <Button
                  style={{
                    letterSpacing: "1px",
                    fontWeight: "bold",
                    backgroundColor: "#e05151",
                    color: "#FFFFBF",
                  }}
                  className="custom-button"
                  variant="contained"
                  color="primary"
                  onClick={() => deleteEntidad(entidadI.id)}
                >
                  Eliminar
                </Button>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

export default GrillaGenericaTable;
