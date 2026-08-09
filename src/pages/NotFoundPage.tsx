import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-black-50 text-white-50 flex flex-col items-center justify-center c-space py-20 text-center">
            <h1 className="text-8xl md:text-9xl font-extrabold text-blue-50 mb-4 tracking-tighter">
                404
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Page Not Found
            </h2>
            <p className="text-white-50/60 max-w-md mb-8 text-base">
                Oops! The page you are looking for doesn't exist or has been moved.
            </p>
            <Link
                to="/"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-50 to-blue-100 text-black font-semibold text-lg hover:shadow-lg hover:shadow-blue-50/20 transition-all duration-300 hover:-translate-y-0.5"
            >
                Return to Home
            </Link>
        </div>
    );
};

export default NotFoundPage;
