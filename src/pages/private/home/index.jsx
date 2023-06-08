import { Link } from "react-router-dom"
import { Card1, Card2, Card3, Destaque, Video } from "../../../assets"
import Layout from "../../../components/layout"
import { Lightbulb, Plant, TrendUp, UsersThree } from "@phosphor-icons/react"

export default function Home() {
    return (
        <Layout>
            <section>
                <div className="text-white relative">
                    <figure><img src={Destaque} alt="" className="max-w-full" /></figure>
                    <div className="absolute top-20 left-5 w-1/2 p-3">
                        <h1 className="font-bold text-5xl">Bem-vindo(a) à Agrodetect Cultive, Compartilhe, Alimente</h1>
                        <p className="text-xl py-8">Estamos comprometidos em fazer a diferença na luta contra a fome global. Oferecemos soluções tecnológicas inovadoras para ajudar você a cultivar suas próprias plantações residenciais de forma eficiente e sustentável. Acreditamos no poder da colaboração e no compartilhamento de alimentos frescos. Junte-se a nós nessa jornada e vamos combater a fome juntos</p>
                        <Link to={"/plantas"}>
                            <button className="bg-darkGreen text-lg font-medium px-5 py-2 rounded">
                                Plante Já!
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-3 content-evenly py-14 pl-12 pr-20">
                    <div className="flex justify-start flex-col pl-5 w-[250px]">
                        <span className="inline-flex items-center bg-green text-white text-sm font-medium mr-2 w-28 h-5 rounded-tr rounded-br">
                            <span className="w-2 h-5 mr-3 bg-darkGreen"></span>
                            Vantagens
                        </span>
                        <p className="text-black text-3xl font-semibold">Por que escolher <br /> a Agrodetect?</p>
                    </div>

                    <div className="grid grid-cols-1 w-[400px]">
                        <div className="flex gap-5">
                            <span><TrendUp size={32} weight="fill" className="text-darkGreen" /></span>
                            <div>
                                <p className="text-black text-lg font-medium">Gestão eficiente das plantações</p>
                                <ul className="list-disc list-inside">
                                    <li>Acompanhe o desenvolvimento de suas plantas em tempo real.</li>
                                    <li>Receba alertas sobre condições do solo e clima.</li>
                                    <li>Tome ações rápidas para proteger suas colheitas.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-10 flex gap-5">
                            <span><Lightbulb size={32} weight="fill" className="text-darkGreen" /></span>
                            <div>
                                <p className="text-black text-lg font-medium">Comunidade colaborativa de agricultores</p>
                                <ul className="list-disc list-inside">
                                    <li>Conecte-se com outros agricultores.</li>
                                    <li>Compartilhe conhecimentos e experiências.</li>
                                    <li>Troque excedentes de colheita e reduza o desperdício.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 w-[400px]">
                        <div className="flex gap-5">
                            <span><UsersThree size={32} weight="fill" className="text-darkGreen" /></span>
                            <div>
                                <p className="text-black text-lg font-medium">Gestão eficiente das plantações</p>
                                <ul className="list-disc list-inside">
                                    <li>Acompanhe o desenvolvimento de suas plantas em tempo real.</li>
                                    <li>Receba alertas sobre condições do solo e clima.</li>
                                    <li>Tome ações rápidas para proteger suas colheitas.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="pt-10 flex gap-5">
                            <span><Plant size={32} weight="fill" className="text-darkGreen" /></span>
                            <div><p className="text-black text-lg font-medium">Comunidade colaborativa de agricultores</p>
                                <ul className="list-disc list-inside">
                                    <li>Conecte-se com outros agricultores.</li>
                                    <li>Compartilhe conhecimentos e experiências.</li>
                                    <li>Troque excedentes de colheita e reduza o desperdício.</li>
                                </ul></div>
                        </div>
                    </div>
                </div>

                <div className="relative">
                    <figure><img src={Video} alt="" className="max-w-full" /></figure>
                    <div className="-mt-48 flex justify-center items-center pb-5">
                        <iframe width="804" height="452" src="https://www.youtube.com/embed/FJe4sIo5F4I" title="AgroDetect" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center py-5">
                    <h1 className="text-black text-2xl font-medium">Junte-se à nossa comunidade de agricultores comprometidos</h1>
                    <figure className="flex justify-evenly gap-5 pt-5">
                        <img src={Card1} alt="" className="w-[300px] h-[400px] rounded-lg" />
                        <img src={Card2} alt="" className="w-[300px] h-[400px] rounded-lg" />
                        <img src={Card3} alt="" className="w-[300px] h-[400px] rounded-lg" />
                    </figure>
                    <div className="flex justify-center items-center pt-5">
                        <button className="bg-darkGreen text-white text-lg font-medium px-5 py-2 rounded">
                            Comunidade
                        </button>
                    </div>
                </div>
            </section>
        </Layout>
    )
}