import axios from 'axios';

export function saveTuning(tuningName, tuning){
    axios.post('/api/tunings',{tuningName, tuning})
}