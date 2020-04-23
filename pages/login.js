import Navbar from "../components/Navbar";

function Login() {
    return (
        <div className="container">
            <Navbar />
            <main>
                <h1 className="title"></h1>

                <p className="description">Login</p>
            </main>
            <footer>Discophile © {new Date().getFullYear()}</footer>
        </div>
    );
}

export default Login;
