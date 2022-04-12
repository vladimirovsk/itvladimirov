import {
    PROJECT_EDIT,
    PROJECT_INSERT,
    PROJECT_DELETE,
    PROJECT_FETCH,
    PROJECT_SELECT,
} from "./actionTypes";

import {fetchProject, editProject, insertProject, deleteProject} from '../../libs/project-service';

export const fetchAllProject = async () => {
    return async (dispatch) =>{
      await fetchProject()
          .then(async res => {
              let rows = await res;
              dispatch({
                      type: PROJECT_FETCH,
                      payload: rows,
                      modify: false
                  })
          }
          )
          .catch(err=>{throw err})

    }
}

export const editRecordProject = async (user) =>{
    return async (dispatch) =>{
        await editProject(user)
            .then(async res => {
                    let row = await res;
                    dispatch({
                    type: PROJECT_EDIT,
                    payload: row,
                    modify: true})
                }
            )
            .catch(err=>{throw err})

    }
}

export const insertRecordProject = async (user) =>{
    return async (dispatch) =>{
        await insertProject(user)
            .then(async res => {
                    let row = await res;
                    dispatch({
                        type: PROJECT_INSERT,
                        payload: row,
                        modify: true
                        })
                }
            )
            .catch(err=>{throw err})
    }
}

export const deleteRecordProject = async (id) =>{
    return async (dispatch) =>{
        await deleteProject(id)
            .then(async res => {
                    let row = await res;
                    dispatch({
                        type: PROJECT_DELETE,
                        payload: row,
                        modify: true
                    })
                }
            )
            .catch(err=>{throw err})
    }
}

export const selectProject = (user) =>{
    return (dispatch) =>{
        dispatch({
            type: PROJECT_SELECT,
            payload: user
        })
    }
}