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
    <div className="container flex flex-col gap-4 p-4 svelte-1itm755 rounded mx-auto  bg-slate-50">
      <div className="header flex flex-row justify-between svelte-1itm755">
          <div className="tab overflow-hidden svelte-1itm755">
              <div className="flex overflow-hidden gap-5">
                <button type="button" className={`text-black font-bold hover:bg-gray-200 p-2 rounded-md ${selected === 0 ? 'selectedd bg-[#fe4a3c] hover:bg-red-600 text-slate-50' : ''}`} onClick={() => handleClick(0)}>ERC20</button>

                <button type="button" className={`text-black font-bold hover:bg-gray-200 p-2 rounded-md ${selected === 1 ? 'selectedd bg-[#fe4a3c] hover:bg-red-600 text-slate-50' : ''}`} onClick={() => handleClick(1)}>ERC721</button>


                <button type="button" className={`text-black font-bold hover:bg-gray-200 p-2 rounded-md ${selected === 4 ? 'selectedd bg-[#fe4a3c] hover:bg-red-600 text-slate-50' : ''}`} onClick={() => handleClick(4)}>Custom</button>
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
            <div className="w-64 flex flex-col shrink-0 justify-between overflow-auto svelte-litm755 h-[calc(100vh-84px)] rounded shadow-md">side bar</div>
            

            <div className="output flex flex-col grow overflow-auto svelte-1itm755 h-[calc(100vh-84px)]  ">
              <CodeEditor/>
            </div>
        
        </div>
    </div>
    
    </>
    
  );
}
