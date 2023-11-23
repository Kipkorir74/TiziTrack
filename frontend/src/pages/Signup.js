import { useState } from "react"

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) =>{
        e.preventDefault()

        console.log(email, password)
        // const user = {email, password} 
        // const response = await fetch ('http://localhost:4000/api/user/signup',{
        //     method:'POST',
        //     body:JSON.stringify(user),
        //     headers: {
        //         'Content-type': 'application/JSON'
        //     }
        // })
        // const json = await response.json()
    }

    return (
        <form className="signup" onSubmit={ handleSubmit}>
            <h3>Signup</h3>

            <label>Email</label>
            <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />

            <label>Email</label>
            <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />

            <button>Signup</button>
        </form>

    )

}

export default Signup