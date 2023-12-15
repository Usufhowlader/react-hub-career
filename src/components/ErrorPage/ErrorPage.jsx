import { NavLink } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center my-4">
            <h2 className="text-4xl my-4"> Oops!!!</h2>
            <button className="bg-purple-900 p-2 rounded  text-white"> <NavLink to='/'>Go Home</NavLink></button>
        </div>
    );
};

export default ErrorPage;