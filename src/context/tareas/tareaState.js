import React, {useReducer} from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import {TAREAS_PROYECTO, AGREGAR_TAREA, VALIDAR_TAREA} from '../../types';

const TareaState = props => {
    const initialState = {
        tareas: [
            {id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1},
            {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 2},
            {id: 3, nombre: 'Elegir Hosting', estado: true, proyectoId: 3},
            {id: 4, nombre: 'Elegir Pene', estado: false, proyectoId: 4},
            {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 4},
            {id: 3, nombre: 'Elegir Hosting', estado: true, proyectoId: 3},
            {id: 4, nombre: 'Elegir Pene', estado: false, proyectoId: 2},
            {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 1},
            {id: 3, nombre: 'Elegir Hosting', estado: true, proyectoId: 1},
            {id: 4, nombre: 'Elegir Pene', estado: false, proyectoId: 2},
            {id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 3},
            {id: 3, nombre: 'Elegir Hosting', estado: true, proyectoId: 4},
            {id: 4, nombre: 'Elegir Pene', estado: false, proyectoId: 1},
        ],
        tareasproyecto: null,
        errortarea: false
    }

    //crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    //crear las funciones

    //obtener las tareas de un proyeto
    const obtenerTareas = proyectoId => {
        dispatch ({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    const agregarTarea = tarea => {
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                obtenerTareas,
                agregarTarea,
                validarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;