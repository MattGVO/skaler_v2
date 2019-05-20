const bcrypt = require("bcryptjs");

module.exports = {
  register: async (req, res) => {
    console.log("/auth/register");
    const db = req.app.get("db");
    let { email, password } = req.body;
    console.log("req.body:", req.body);
    let [foundUser] = await db.auth.find_user({ email });
    console.log("foundUser:", foundUser);
    if (foundUser) {
      res.status(409).send("That email has already been registered");
    } else {
      let salt = bcrypt.genSaltSync(10);
      let hash = bcrypt.hashSync(password, salt);
      let [registeredUser] = await db.auth.register({ email, hash });
      console.log("registeredUser:", registeredUser);
      req.session.user = {...registeredUser, userTunings:[]};
      console.log("req.session.user:", req.session.user);
      res.status(200).send(req.session.user);
    }
  },
  login: async (req, res) => {
    console.log("/auth/login");
    const db = req.app.get("db");
    let { email, password } = req.body;
    console.log("req.body:", req.body);
    let [foundUser] = await db.auth.find_user({ email });
    console.log("foundUser:", foundUser);
    if (foundUser) {
        let authenticated = bcrypt.compareSync(password, foundUser.password)
        console.log('authenticated:',authenticated);
        if(authenticated){
            let [loggedInUser] = await db.auth.login({email})
            console.log('loggedInUser:',loggedInUser);
            let {id} = loggedInUser
            let userTunings = await db.tunings.get_all_tunings({id})
            console.log('userTunings:',userTunings);
            req.session.user = {...loggedInUser, userTunings};
            console.log("req.session.user:", req.session.user);
            res.status(200).send(req.session.user);
        } else {
            res.status(401).send('Incorrect Password')
        }
    } else {
        res.status(401).send('That email has not yet been registered')
    }
  },
  logout: async (req, res) => {
    console.log("/auth/logout");
    console.log('before:', req.session.user);
    req.session.destroy()
    console.log('after:', req.session);
    res.sendStatus(200);
  }
};
