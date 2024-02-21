"use client";

import CodeEditor from "@/components/syntaxHighlighter";

import { useState } from "react";

import Download from "@/components/cairoDownloadBtn";


import CopyBtn from "@/components/CopyBtn";


export default function Cairo() {

const [selected, setSelected] = useState(0);

const handleClick = (index: any) => {
  setSelected(index);
};
  return (
    <>
    <div className="flex flex-col gap-4 p-4 mx-4 rounded   bg-slate-50">
      <div className=" flex flex-row justify-between ">
          <div className=" overflow-hidden ">
              <div className="flex overflow-hidden ">
                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 0 ? 'selectedd bg-[#fe4a3c] hover:bg-red-600 text-[#f5f5f5]' : ''}`} onClick={() => handleClick(0)}>ERC20</button>

                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 1 ? 'selectedd bg-[#fe4a3c] hover:bg-red-600 text-[#f5f5f5]' : ''}`} onClick={() => handleClick(1)}>ERC721</button>


                <button type="button" className={`text-[#575c66] font-bold hover:bg-gray-200 py-2 px-4 rounded-md ${selected === 4 ? 'selectedd bg-[#fe4a3c] hover:bg-red-600 text-[#f5f5f5]' : ''}`} onClick={() => handleClick(4)}>Custom</button>
              </div>
          </div>
          <div className="action flex flex-row gap-2 shrink-0">
                
          <div className="action flex flex-row gap-2 shrink-0">  
                <CopyBtn/>
                <Download/>   
          </div>
          </div>
        </div>
        <div className="flex flex-row gap-4 grow">
            <div className="w-64 flex flex-col shrink-0 justify-between overflow-auto h-[calc(100vh-84px)] rounded shadow-md">side bar</div>
            

            <div className="output flex flex-col grow overflow-auto  h-[calc(100vh-84px)]  ">
              <CodeEditor/>
            </div>
        
        </div>
    </div>
    
    </>
    
  );
}
