export default function Settings() {
    return (
<div className="bg-white rounded-2xl flex flex-col text-[0.75rem] p-10"><div className="mb-5"><div className="items-center flex justify-between"><div className="items-center flex"><div className="px-3"><div className="relative"><div><button className="items-start text-black cursor-pointer inline-block text-center align-middle w-10"><div className="text-center"><div className="items-center rounded-full flex justify-center text-center"><svg className="text-zinc-600 h-5 overflow-hidden text-center w-5" height={18} width={18} viewBox="0 0 24 24" aria-hidden="true" aria-label role="img"><path className="text-center" d="M12 9c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3M3 9c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm18 0c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3z" /></svg></div></div></button></div></div></div></div><div className="items-center flex"><div className="relative"><div className="rounded-lg relative"><div className="items-center flex"><button className="items-center bg-zinc-100 rounded-lg text-black cursor-pointer flex flex-grow justify-between px-3.5 relative text-center align-middle w-44"><div className="items-center flex mr-2 overflow-hidden text-center"><div className="text-neutral-900 overflow-hidden break-words" style={{display: '-webkit-box', wordBreak: 'break-word', wordWrap: 'break-word'}}><span>Portfolio</span></div></div><div className="-mr-1 text-center"><svg className="text-neutral-900 h-3 overflow-hidden text-center w-3" height={12} width={12} viewBox="0 0 24 24" aria-label="Choose a board" role="img"><path className="text-center" d="M12 19.5.66 8.29c-.88-.86-.88-2.27 0-3.14.88-.87 2.3-.87 3.18 0L12 13.21l8.16-8.06c.88-.87 2.3-.87 3.18 0 .88.87.88 2.28 0 3.14L12 19.5z" /></svg></div></button><button className="items-start bg-red-600 rounded-lg text-black cursor-pointer px-3.5 text-center align-middle w-16"><div className="text-white font-semibold break-words" style={{wordWrap: 'break-word'}}>Save</div></button></div></div></div></div></div></div><div><div className="flex pb-10"><div className="px-5"><div className="flex flex-col"><div className="flex flex-col relative"><div className="flex-grow"><div><div className="bg-zinc-100 rounded-lg"><div className="rounded-lg relative"><div className="rounded-xl overflow-hidden p-3 relative"><div className="items-center rounded-md border-dashed flex flex-col justify-center" style={{border: '0.13rem', borderWidth: '0.13rem', borderColor: 'rgb(218, 218, 218)'}}><div className="p-2"><svg className="text-zinc-600 h-8 overflow-hidden align-middle w-8" height={32} width={32} viewBox="0 0 24 24" aria-label="Add an image or video" role="img"><path d="M24 12c0-6.627-5.372-12-12-12C5.373 0 0 5.373 0 12s5.373 12 12 12c6.628 0 12-5.373 12-12zm-10.767 3.75a1.25 1.25 0 0 1-2.5 0v-3.948l-1.031 1.031a1.25 1.25 0 0 1-1.768-1.768L12 7l4.066 4.065a1.25 1.25 0 0 1-1.768 1.768l-1.065-1.065v3.982z" /></svg></div><div className="m-4 px-12"><div className="text-neutral-900 text-center">Drag and drop or click to upload</div></div></div><div className="m-8 overflow-hidden absolute" style={{top: '24.75rem'}}><div className="text-neutral-900 text-[0.88rem] text-center"><span className="text-neutral-500 text-center">Recommendation: Use high-quality .jpg files less than 20MB</span></div></div></div><input className="items-baseline cursor-pointer opacity-0 overflow-hidden absolute align-middle whitespace-pre w-80" style={{textOverflow: 'ellipsis'}} /></div></div></div></div><div className="m-2"><div><div><button className="items-start rounded-3xl text-black cursor-pointer text-center align-middle w-80"><div className="items-center bg-zinc-100 rounded-3xl flex justify-center p-3 text-center"><div className="text-neutral-900 font-semibold text-center">Save from site</div></div></button></div></div></div></div></div></div><div className="flex-grow px-5"><div className="relative"><div className="flex flex-col"><div><div className="m-8"><div><div className="flex flex-col"><div className="relative"><textarea className="text-black cursor-text inline-block text-[2.25rem] font-bold break-words align-top whitespace-pre-wrap w-96" style={{wordWrap: 'break-word'}} defaultValue={""} /><div className="absolute"><div className="text-zinc-800 text-[2.25rem] font-bold break-words whitespace-pre-wrap" style={{wordWrap: 'break-word'}} /></div></div><div><div className="p-2" /><div className="m-1" /></div></div></div></div><div className="m-4"><div><div className="items-center flex -ml-1 -mr-1"><div className="px-1"><div><div className="rounded-full overflow-hidden relative"><div className="rounded-full relative"><div className="bg-gray-200 rounded-full pb-12 relative"><div className="flex justify-center absolute"><svg className="h-12 overflow-hidden w-12" width="100%" viewBox="-50 -50 100 100" version="1.1" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg"><div>Viky W avatar link</div><text className="text-[2.50rem] font-semibold whitespace-nowrap">V</text></svg></div></div></div></div></div></div><div><div className="items-center flex flex-grow px-1"><div><div><div className="text-neutral-900 text-[0.88rem] font-semibold break-words" style={{wordWrap: 'break-word'}}>Viky W</div></div></div></div></div></div></div></div><div className="flex flex-grow m-6"><div className="flex flex-col"><div className="relative"><div className="text-zinc-800 text-[1.13rem] break-words whitespace-pre-wrap" style={{wordWrap: 'break-word'}}><div className="items-center flex flex-grow justify-between whitespace-pre-wrap"><div className="flex flex-col flex-grow mx-4 px-1 whitespace-pre-wrap" style={{alignSelf: 'center'}}><div className="relative whitespace-pre-wrap"><div className="text-neutral-500 absolute whitespace-pre-wrap" style={{right: '2.84rem'}}><div className="whitespace-pre-wrap">Tell everyone what your Pin is about</div></div><div className="relative whitespace-pre-wrap"><div className="whitespace-pre-wrap" style={{lineBreak: 'after-white-space', userSelect: 'text'}}><div className="whitespace-pre-wrap"><div className="whitespace-pre-wrap"><div className="relative whitespace-pre-wrap"><span className="whitespace-pre-wrap"><div className="whitespace-pre-wrap" /></span></div></div></div></div></div></div></div><div className="whitespace-pre-wrap"><div className="rounded-full flex justify-center whitespace-pre-wrap"><div className="rounded-full cursor-pointer whitespace-pre-wrap"><div className="items-center flex text-[1.50rem] justify-center whitespace-pre-wrap">😃</div></div></div></div></div></div></div><div><div className="p-2" /><div className="m-1" /></div></div></div><div className="m-2"><div className="flex-grow"><button className="items-start rounded-3xl text-black cursor-pointer inline-block text-center align-middle w-28"><div className="items-center bg-zinc-100 rounded-3xl flex justify-center p-2 text-center"><div className="text-neutral-900 font-semibold text-center">Add alt text</div></div></button></div></div></div><div className="m-4"><div className="flex flex-col"><div className="relative"><textarea className="text-zinc-800 cursor-text inline-block text-[1.13rem] break-words align-top whitespace-nowrap w-96" style={{wordWrap: 'break-word'}} defaultValue={""} /></div><div><div className="p-2" /><div className="m-1"><div className="flex justify-between"><div className="flex-grow"><div className="text-zinc-600 break-words" style={{wordWrap: 'break-word'}} /></div></div></div></div></div></div></div></div></div></div></div></div>

    )
}