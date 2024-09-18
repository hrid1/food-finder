import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="mx-auto my-auto h-[80vh] flex flex-col items-center justify-center gap-4">
            
            <h1 className='text-5xl text-center text-white font-semibold  '>404 <br /> Not Found !</h1>

            <Link to={-1}>
            <button className="btn mt-4">Go Back</button></Link>

        </div>
    );
};

export default ErrorPage;