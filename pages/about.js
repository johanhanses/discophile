import Navbar from "../components/Navbar";

function About() {
    return (
        <div className="container">
            <Navbar />
            <main>
                <h1 className="title"></h1>

                <p className="description">About</p>
            </main>
            <footer>Johan Hanses {new Date().getFullYear()}</footer>
        </div>
    );
}

export default About;
