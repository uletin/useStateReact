import { useState } from "react"

export default function ProblemTwo() {
    
    //state denga data object diinisialisasi terlebih dahulu, tidak dibuat per-state untuk setiap object, 
    // sebab akan memperlambat kinerja dari hooks
    // tetapi jika value dari object berbeda-beda, seperti ada "", 0, [], {}. disarankan menggunakan useReducer
    const [user, setUser] = useState({
        name: "",
        surname: "",
        username: "",
        email: "",
        password: "",
        country: "",
        city: "",
        address: "",
    })

    const handleChange = (e) => {
        // update spesifik object
        setUser(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    console.log(user)

    return (
        <div>
            <form className="grid place-content-center space-y-5 p-5 bg-slate-200 rounded-lg">
                <p className="font-bold">Problem Two</p>
                <p>Penggunaan object pada default state hendaknya data diinisialisasi terlebih dahulu <br></br>
                   Buka console anda.
                </p>
                <p>Form User</p>
                <input type="text" name="name" onChange={handleChange} placeholder="name" />
                <input type="text" name="surname" onChange={handleChange} placeholder="surname" />
                <input type="text" name="username" onChange={handleChange} placeholder="username" />
                <input type="text" name="email" onChange={handleChange} placeholder="email" />
                <input type="text" name="password" onChange={handleChange} placeholder="password" />
                <input type="text" name="country" onChange={handleChange} placeholder="country" />
                <input type="text" name="city" onChange={handleChange} placeholder="city" />
                <input type="text" name="address" onChange={handleChange} placeholder="address" />
                <button className="bg-slate-400">Submit</button>
            </form>
        </div>
    )
}