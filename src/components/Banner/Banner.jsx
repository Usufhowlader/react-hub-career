

const Banner = () => {
    return (
        <div className="flex justify-between items-center ">
            <div>
            <h2 className="text-6xl font-bold">One Step <br/> Closer To Your <br/> <span className="text-4xl text-indigo-800 font-medium">Dream Job</span></h2>
            <p className="my-8">Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className="btn btn-primary">Get Started</button>
            </div>
           <div>
           <img src="../../../src/assets/images/user.png" alt="" />
           </div>
        </div>
    );
};

export default Banner;