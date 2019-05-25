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
    saveTuning: (req,res) =>{
        console.log("saveTuning")
        console.log(req.body)
        res.sendStatus(200)
    }
}