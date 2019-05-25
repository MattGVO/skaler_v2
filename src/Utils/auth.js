import axios from "axios";

export async function loginReg(
    action,
    email,
    password,
    getError,
    updateUser,
    toggleLogin,
    setEmail,
    setPassword
  ) {
    if (!email && !password) {
      getError("Please fill out email AND password fields");
      return;
    }
    if (
      email.match(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
    ) {
      await axios
        .post(`/auth/${action}`, { email, password })
        .then(res => {
          console.log(res.data)
          updateUser(res.data);
        })
        .catch(err => getError(err.response.data));
      getError("");
      toggleLogin(false);
      setEmail("");
      setPassword("");
    } else {
      getError("Invalid email");
    }
  }

  