import { Logo } from "../../assets";
import { Link } from "react-router-dom";
import { useAppContext } from "../context";
import { List } from "@phosphor-icons/react";

export default function Header() {
    const {
        menu,
        setMenu
    } = useAppContext();

    return (
        <header className="select-none bg-lightGray text-gray text-lg font-medium">
            <nav className="flex items-center justify-between gap-5 md:gap-0 px-5 w-full h-[100px]">
                <div className="flex items-center justify-center text-xl font-semibold">
                    <Link to={"/"}>
                        <img src={Logo} alt="" className={'max-w-full'} />
                    </Link>
                </div>

                <div className="flex items-center lg:hidden">
                    <button
                        onClick={() => setMenu(!menu)}
                        type="button"
                        className="inline-flex items-center text-sm text-gray rounded-lg"
                    >
                        <List size={40} weight="bold" className={'text-gray'} />
                    </button>
                </div>

                <div
                    onClick={() => setMenu(false)}
                    className={`lg:flex justify-end items-center w-full p-2 ${menu ? "visible absolute top-[100px] right-0 w-full" : "hidden"}`}
                >
                    <div className="bg-lightGray rounded-lg flex lg:items-center justify-center lg:flex-row flex-col lg:gap-7">
                        <Link to={"/"} className="p-2">Home</Link>
                        <Link to={"/plantas"} className="p-2">Plantações</Link>
                        <Link to={""} className="p-2">Comunidade</Link>
                        <Link to={""} className="p-2">Sobre Nós</Link>
                        <Link to={""} className="p-2">Contatos</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}