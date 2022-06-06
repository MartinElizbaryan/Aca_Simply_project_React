import axios from "axios"
import { useState } from "react"

export default function SignUp() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [emailReg, setEmailReg] = useState("")
  const [passwordReg, setPasswordReg] = useState("")
  const [confirmedPassword, setConfirmedPassword] = useState("")
  const [name, setName] = useState("")
  const [surname, setSurname] = useState("")

  const signUp = async () => {
    const res = await axios.post("http://localhost:5000/api/v1/auth/sign-up", {
      email: emailReg,
      password: passwordReg,
      confirmedPassword,
      name,
      surname,
    })
  }
  const signIn = async () => {
    const res = await axios.post("http://localhost:5000/api/v1/auth/sign-in", {
      email,
      password,
    })
    console.log(res.data)
    if (res.data.auth) localStorage.setItem("accessToken", res.data.accessToken)
  }

  return (
    <div>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <label>Name</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <label>Surname</label>
        <input type="text" onChange={(e) => setSurname(e.target.value)} />
        <label>Email</label>
        <input type="text" onChange={(e) => setEmailReg(e.target.value)} />
        <label>Password</label>
        <input type="text" onChange={(e) => setPasswordReg(e.target.value)} />
        <label>Cofirm Password</label>
        <input
          type="text"
          onChange={(e) => setConfirmedPassword(e.target.value)}
        />
        <button onClick={signUp}>Sign up</button>
      </div>
      <div className="sign-in">
        <h2>Sign In</h2>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={signIn}>Sign in</button>
      </div>
    </div>
  )
}
