import { Drop, FileArrowUp, Plus, Thermometer, Wind } from "@phosphor-icons/react"
import { Maca, Alface, Banana, Clima } from "../../../assets"
import { useAppContext } from "../../../components/context"
import Layout from "../../../components/layout"
import Modal from "../../../components/modal"

export default function Plant() {
    const {
        modal,
        setModal,
        result,
        handleFileChange,
        handleSubmit,
        currentAirQuality,
        currentConditions,
        airQualityForecasts,
        hourlyForecasts,
        dailyForecast,
    } = useAppContext();

    return (
        <Layout>
            <section className="min-h-[70vh] grid grid-cols-1 content-start">
                <div className="relative flex justify-center items-center">
                    <figure><img src={Clima} alt="" /></figure>
                    <div className="bg-white bg-opacity-70 rounded-2xl px-8 py-3  absolute top-12">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex justify-center items-center gap-10">
                                <div className="text-center flex flex-col">
                                    <p className="font-bold text-xl text-black"><Thermometer size={30} weight="fill" className="inline" /> <span>{JSON.stringify(currentConditions?.temperature?.value, null, 2)}</span> °C</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-xl text-black"><Drop size={30} weight="fill" className="inline" /> <span>{JSON.stringify(airQualityForecasts?.relativeHumidity, null, 2)}</span>%</p>
                                </div>
                                <div className="text-center">
                                    <p className="font-bold text-xl text-black"><Wind size={32} weight="fill" className="inline" /> <span>{JSON.stringify(currentAirQuality?.airQualityCategory).replace(/["]/g, '')}</span></p>
                                </div>
                            </div>
                            <span className="pt-2 font-medium">Temp. Max. {JSON.stringify(dailyForecast?.airAndPollen?.maximum?.value, null, 2)} °C - Temp. Min. {JSON.stringify(dailyForecast?.airAndPollen?.minimum?.value, null, 2)} °C</span>
                        </div>
                    </div>
                </div>

                <div className="px-20 py-10">
                    <h1 className="text-4xl font-semibold text-darkGreen">Identificar Planta</h1>
                    <div className="border border-green rounded w-full my-5 p-4 h-auto">
                        <p className="text-2xl font-semibold text-gray pb-3">Faça upload de uma foto</p>
                        <div className="flex flex-wrap justify-between lg:justify-start lg:gap-5">
                            <label className="w-auto flex flex-row items-center gap-2 px-4 py-3 rounded uppercase border cursor-pointer bg-orange text-white">
                                <FileArrowUp size={25} />
                                <span className="text-base leading-normal">Selecione um arquivo</span>
                                <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
                            </label>
                            <button onClick={handleSubmit} className="bg-orange text-white rounded py-2 px-5">Enviar</button>
                        </div>

                        {result && (
                            <div className="relative overflow-x-auto pt-5">
                                <table className="w-full text-sm text-left text-gray-500">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                        <th scope="col" className="px-6 py-3 bg-darkGreen text-white">
                                            Nome
                                        </th>
                                    </thead>
                                    <tbody>
                                        {result.suggestions.map((row, index) => (
                                            <tr key={index} className="bg-white text-gray border-b">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray whitespace-nowrap">
                                                    {row.plant_name}
                                                </th>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}
                    </div>

                    <div>
                        <h1 className="text-4xl font-semibold text-darkGreen">Suas plantações</h1>

                        <div className="border border-green rounded w-full mt-5 p-4 h-auto">
                            <p className="text-2xl font-semibold text-gray pb-3">Minhas plantações</p>

                            <figure className="flex flex-wrap justify-center md:justify-start items-start flex-row gap-5">
                                <img src={Maca} alt="" className="max-w-[8rem]" />
                                <img src={Alface} alt="" className="max-w-[8rem]" />
                                <img src={Banana} alt="" className="max-w-[8rem]" />
                            </figure>
                        </div>

                        <div className="border border-green rounded w-full mt-5 p-4 h-auto">
                            <p className="text-2xl font-semibold text-gray pb-3 text-start">Cadastrar</p>

                            <div className=" flex justify-center items-center cursor-pointer">
                                <Plus size={80} onClick={() => setModal(true)} className="text-orange" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {modal && <Modal visible={modal} hidden={() => setModal(false)} />}
        </Layout>
    )
}