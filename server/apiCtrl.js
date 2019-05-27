const _ = require('lodash')

module.exports={
    userInfo: (req, res) =>{
        if(req.session.user){
            res.status(200).send(req.session.user) 
        } else{
            console.log('else')
            req.session.user ={
                id: null,
                email: ""
            }
            res.status(200).send(req.session.user) 
        }
    },
    saveTuning: async (req,res) =>{
        console.log("saveTuning")
        const db = req.app.get('db')
        // const id = req.session.user.id
        const id = 1
        const { tuningName } = req.body
        const notes = _.map(req.body.tuning).join(",")
        console.log('tuningName:',tuningName);
        console.log('notes:',notes);
        let allTunings = await db.tunings.create_tuning({id,tuningName,notes})
        console.log("allTunings: ",allTunings)
        req.session.user.userTunings = {...allTunings}
        res.sendStatus(200)
    }
}