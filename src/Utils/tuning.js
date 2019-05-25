import axios from 'axios';

export function saveTuning(tuning){
    axios.post('/api/tunings',{tuning})
}