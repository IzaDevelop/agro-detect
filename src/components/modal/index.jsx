import { FileArrowUp, MagnifyingGlass } from "@phosphor-icons/react";
import { useState } from "react";

export default function Modal(props) {
    const [selectedFile, setSelectedFile] = useState(null);

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        setItem('capa', selectedFile)
    };

    return (
        <div className={`${props.visible
            ? "w-full h-screen fixed inset-0 bg-zinc-900 bg-opacity-60 flex items-center justify-center z-30"
            : "hidden"
            }`}>
            <div className="bg-white w-1/2 max-w-md h-auto min-h-[250px] rounded-lg flex flex-col p-5">

                <label for="search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Buscar</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <MagnifyingGlass size={20} />
                    </div>
                    <input type="search" id="search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-transparent focus:border-transparent" placeholder="Digite o nome da plantação" required />
                    <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-orange hover:bg-orange focus:ring-4 focus:outline-none focus:ring-transparent font-medium rounded-lg text-sm px-4 py-2">Buscar</button>
                </div>

                <p className="text-lg font-semibold text-gray py-3">Faça upload da foto de capa</p>

                <label className="w-auto flex flex-row items-center gap-2 px-4 py-3 rounded border cursor-pointer bg-orange text-white">
                    <FileArrowUp size={25} />
                    <span className="text-base leading-normal">Selecione um arquivo</span>
                    <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                </label>

                <div className="flex justify-between gap-2">
                    <button onClick={() =>
                        props.hidden()
                    } className="bg-green font-medium text-white rounded py-2 px-5 mt-5 flex-1">Fechar</button>
                    <button onClick={() => {
                        handleSubmit,
                            props.hidden()
                    }} className="bg-green font-medium text-white rounded py-2 px-5 mt-5 flex-1">Salvar</button>
                </div>
            </div>
        </div>
    );
}