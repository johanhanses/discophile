import Navbar from "../components/Navbar";

function Signup() {
    return (
        <div className="container">
            <Navbar />
            <main>
                <h1 className="title"></h1>

                <p className="description">Signup</p>
            </main>
            <footer>Discophile © {new Date().getFullYear()}</footer>
        </div>
    );
}

export default Signup;
