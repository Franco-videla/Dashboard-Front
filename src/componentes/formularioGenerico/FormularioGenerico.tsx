import { useEffect, useMemo, useState } from 'react';
import InputRenderer from './InputRenderer';
import useFormHandlers from './useFormHandlers';
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
  type FormProps<T extends object> = {
      data: T,
      listaSelects?: any,
      onSubmit: (formData: T) => void
    };
  
  function FormularioGenerico<T extends object>({ data, listaSelects = {}, onSubmit }: FormProps<T>) {
    const [formData, setFormData] = useState(data);
    const [errors, setErrors] = useState<{ [key in keyof T]?: string }>({});
    const { handleChange, handleSubmit } = useFormHandlers<T>(formData, setFormData, errors, setErrors, listaSelects, onSubmit);
    
    const keys = useMemo(() => {
      return Object.keys(data) as Array<keyof T>
    }, [data]);

    useEffect(() => {
      setFormData(data);
    }, [data]);
  
    return (
      <form  onSubmit={handleSubmit} className='container'>
        <div  className='row'>
          {keys.map((atributo, indice) => 
            !['id', 'pedidos', 'esParaElaborar', 'type', 'sucursales', 'casaMatriz'].includes(String(atributo)) && ( 
              <div  key={String(atributo)} className={'mb-3'}>
                <label  htmlFor={String(atributo)} className='form-label'>
                  {(data as any).constructor.labels && (((data as any).constructor.labels as string[])[indice])}
                </label>
                <InputRenderer key={String(atributo)} atributo={atributo} value={formData[atributo]} listaSelects={listaSelects} data={data} handleChange={handleChange} errors={errors}>

                </InputRenderer>
              </div>
            )
          )}
        </div>
        <Button type='submit'
            sx={{
              bgcolor: "#a6c732",
              "&:hover": {
                bgcolor: "#a0b750",
              },
              my: 3,
              mx: 1
            }}
            variant="contained"
            startIcon={<Add />}
          >
            Enviar
          </Button>
      </form>
    );
  }

export default FormularioGenerico;