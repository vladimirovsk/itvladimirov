const axios = require('axios');

export const fetchProject = async (filter = '') => {
    const serverAddrres = 'http://localhost:8000';
    let dbgridData = []
    let url = `${serverAddrres}/project/`
    if (filter !==''){url= url+`:${filter}`}
    let result = await axios.get(`${url}${filter}`)
        .then(async (response) => {
            return await response.data
        })
        .catch(err=>{throw err})
         for (let i in result) {
             dbgridData.push({
                 id: result[i]._id,
                 title: result[i].title,
                 ico: result[i].ico,
                 img: result[i].img,
                 note: result[i].note
             });
         }
    return dbgridData
}

export const editProject = async (project) =>{
    let body = {
        title: project.title,
        ico:project.ico,
        img: project.img,
        note: project.note
    }
    axios.put(`/project/${project.id}`, body)
        .then(async result => {
            console.log("record saved", result)
            return await result;
        })
        .catch(err => {
            throw err
        })
}

export const insertProject = async (project)=> {
    let body = {
        title: project.title,
        ico:project.ico,
        img: project.img,
        note: project.note
    }
    axios.post(`/project/`, body)
        .then(async result => {
            console.log("insert record", result)
            return await result;
        })
        .catch(err => {
            throw err
        })
}

export const deleteProject = async (id) =>{
    axios.delete(`/project/${id}`)
        .then(async result => {
            console.log("record deleted", result)
            return await result;
        })
        .catch(err=>{throw err})
}

