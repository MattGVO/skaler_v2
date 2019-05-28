import axios from 'axios';

export async function saveTuning(tuningName, tuning, updateUser){
   let res = await axios.post('/api/tunings',{tuningName, tuning})
   updateUser(res.data)
}

export async function updateTuning(newName, name, tuning, updateUser){
    let res = await axios.put('/api/tunings',{newName, name, tuning })
    console.log(res.data)
    updateUser(res.data)
}

export async function deleteTuning(tuningName, updateUser){
    let res = await axios.delete(`/api/tunings/${tuningName}`)
    updateUser(res.data)
}