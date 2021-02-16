import React, {useContext, useState} from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';


const FormTarea = () => {

    //extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext)
    const {proyecto} = proyectosContext

    //obtener la funcion del context de tarea
    const tareasContext = useContext(tareaContext);
    const {errortarea, agregarTarea, validarTarea, obtenerTareas} = tareasContext;

    const [tarea, guardarTarea] = useState({
        nombre: ''
    })

    const {nombre} = tarea;

    //si no hay proyecto seleccionado
    if (!proyecto) return null;

    //destructuring para extraer el proyecto actual
    const [proyectoActual] = proyecto;

    const handleChange = e => {
        guardarTarea({
            ...tarea,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault();

        if(nombre.trim() === '' ) {
            validarTarea();
            return;
        }
        

        tarea.proyectoId = proyectoActual.id;
        tarea.estado = false;
        agregarTarea(tarea);

        obtenerTareas(proyectoActual.id);

        guardarTarea({
            nombre: ''
        })

    }

    return ( 
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Tarea..."
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input 
                        type="submit"
                        className="btn btn-primario btn-submit btn-block"
                        value="Agregar tarea"
                    />
                </div>
            </form>

            {errortarea ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null }
        </div>
     );
}
 
export default FormTarea;