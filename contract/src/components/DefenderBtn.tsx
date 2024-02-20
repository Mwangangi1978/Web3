import Image from 'next/image'
import React from 'react'

function DefenderBtn() {
  return (
    <div>
      <button  className="border p-2 rounded hover:bg-gray-200">
                <a href="#" className="font-bold text-black flex gap-1">
                  <Image src="/defender.svg" alt="defender" width={15} height={15}/>
                  Deploy with Defender</a>
                </button>
    </div>
  )
}

export default DefenderBtn
