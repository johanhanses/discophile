import Navbar from "../components/Navbar";

function MyAlbums() {
    return (
        <div className="container">
            <Navbar />
            <main>
                <h1 className="title"></h1>

                <p className="description">My Albums</p>
            </main>
            <footer>Discophile © {new Date().getFullYear()}</footer>
        </div>
    );
}

export default MyAlbums;
