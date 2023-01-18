'use client';

const Hero = () => (
    <section>
        <h1 className="text-white text-center pt-52 pb-2 text-5xl"> Revolte</ h1>
        <p className="text-white text-center pb-20"> Story of a whistleblower</ p>
        <div className="grid mx-auto place-content-center">
            <button className="bg-white hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                onClick={() => alert("In Development!")}
            >
                Enter the adventure
            </button>
        </div>
    </section>
);

export default Hero; 