import Navbar from "../components/Navbar";

function Albums() {
    return (
        <div className="container">
            <Navbar />
            <main>
                <h1 className="title"></h1>

                <p className="description">All albums</p>
            </main>
            <footer>Discophile © {new Date().getFullYear()}</footer>
        </div>
    );
}

export default Albums;
