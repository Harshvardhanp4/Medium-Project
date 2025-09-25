import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const useTypewriter = (text: string, speed: number = 50) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + text[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, speed);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, speed]);

    return displayText;
}

export const LandingPage = () => {
    const typewriterText = useTypewriter("Write, share, inspire, connect with Medium. Explore stories, insights, and experiences from writers around the world.", 50);

    const features = [
        {
            title: "Write Your Story",
            description: "Share your ideas, experiences, and expertise with the world.",
        },
        {
            title: "Reach Millions",
            description: "Connect with readers from around the globe who share your interests.",
        },
        {
            title: "Join the Community",
            description: "Engage with other writers and readers in meaningful discussions.",
        },
    ];

    return (
        <main className="flex flex-col min-h-screen">

            <section className="flex flex-col items-center justify-center px-6 py-24 bg-gray-50 text-center">
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                    Your journey of words begins here
                </h1>
                <div className="text-2xl sm:text-3xl text-gray-700 mb-10">
                    {typewriterText}
                </div>
                <div className="flex flex-col sm:flex-row gap-6 mt-10">
                    <Link to="/signin">
                        <button className="w-44 h-12 rounded-xl bg-white text-black border border-black text-sm transition hover:bg-green-400">
                            Login
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="w-44 h-12 rounded-xl bg-white text-black border border-black text-sm transition hover:bg-green-400">
                            Register
                        </button>
                    </Link>
                </div>
            </section>


            <section className="bg-white py-20">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-12">Why Choose Medium?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-8 rounded-lg bg-gray-50 shadow-md border border-gray-200 transition hover:bg-green-400"
                            >
                                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                                <p className="text-gray-600 text-lg">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50 text-center">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6 text-gray-900">Ready to Start Writing?</h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                        Join millions of writers and readers who are already sharing their stories on Medium. Start your writing
                        journey today.
                    </p>
                    <Link to="/signup">
                        <button className="w-48 h-12 rounded-lg bg-green-400 text-white text-lg font-medium cursor-pointer">
                            Get Started →
                        </button>
                    </Link>
                </div>
            </section>


            <footer className="mt-auto py-12 bg-gray-100">
                <div className="container mx-auto px-6 text-center">
                    <div className="flex flex-col items-center">
                        <h3 className="text-xl font-semibold mb-4 text-gray-700">Contact Me</h3>
                        <a
                            href="mailto:harshupatil.224@gmail.com"
                            className="inline-block px-8 py-3 rounded-lg bg-green-400 text-white font-medium hover:bg-gray-800 transition"
                        >
                            harshupatil.224@gmail.com
                        </a>
                    </div>
                </div>
            </footer>
        </main>
    )
}