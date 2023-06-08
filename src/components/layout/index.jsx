import Header from "../header";

export default function Layout(props) {
    return (
        <>
            <Header/>
            <main className="select-none bg-white">
                {props.children}
            </main>
        </>
    );
}