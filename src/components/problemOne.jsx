import { useState } from "react"

export default function ProblemOne() {
    const [number, setNumber] = useState(0)
    const [number2, setNumber2] = useState(0)

    const increase = () => {
        setNumber(number + 1)
    }

    const increaseUseAsync = () => {
        setTimeout(() => {
            setNumber(number + 1)
        }, 2000)
    }

    const reset = () => {
        setNumber(0)
    }

    // -----------------------------------------

    const increase2 = () => {
        setNumber2(number2 + 1)
    }

    //disini perbedaannya, menggunakan function
    const increaseUseAsync2 = () => {
        setTimeout(() => { setNumber2((currentState) => currentState + 1)
        }, 2000)
    }

    const reset2 = () => {
        setNumber2(0)
    }

    return (
        <div className="grid grid-cols-2">
            <div className=" bg-slate-200 p-10">
                <p className="font-bold">Permasalahan Pertama</p>
                <p>Ketika menekan button increaseAsync, kemudian menekan button increase secara terus menerus
                    angka akan bertambah sesuai dengan state increaseAsync. Misal: kita menekan tombol incrase Async
                    1x, kemudian diteruskan dengan menekan button increase sebanyak 5x. Maka count akan bertambah 1 saja
                    bukan enam. Atau jika kita menekan increase Async sebanyak 5x, maka hanya bertambah 1.
                </p>
                <button onClick={increase}>Increase</button>
                <button onClick={increaseUseAsync}>Increase Async</button>
                <br></br>
                <button onClick={reset}>Reset</button>
                <p>count : {number}</p>
            </div>
            <div className="bg-slate-600 p-10">
            <p className="font-bold text-white">Penyelesaian Masalah</p>
            <p className="text-white">Cara menyelesaikannya adalah pada setState menggunakan function</p>
            <button onClick={increase2}>Increase</button>
                <button onClick={increaseUseAsync2}>Increase Async</button>
                <br></br>
                <button onClick={reset2}>Reset</button>
                <p className="text-white">count{number2}</p>
            </div>
        </div>
    )
}