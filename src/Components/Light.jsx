import { useState } from "react"
function Light() {

    const [color, setColor] = useState(false)

    const onBtn = () => {
        setColor(true)
    }

    const offBtn = () => {
        setColor(false)
    }


    return <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <div style={{ backgroundColor: color === true ? "yellow" : ""}} className="w-48 border-2 border-black p-24 rounded-full mb-10"></div>
       <div class="flex space-x-3">
        <button style={{backgroundColor: color === true ? "red" : ""}} onClick={onBtn} className="bg-black rounded text-white font-bold px-4 py-1">ON</button>
        <button style={{backgroundColor: color === false ? "red" : ""}} onClick={offBtn} className="bg-black rounded text-white font-bold px-4 py-1">OFF</button>
    </div>
    </div>
}

export default Light 