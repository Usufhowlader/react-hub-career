import { MdLocationOn } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
const Job = ({job}) => {
    const {logo,job_title,company_name,remote_or_onsite,job_type,location,salary}=job;
    return (
        <div className="my-8">
            <div className="card card-compact  bg-gray-200 ">
  <figure><img className="w-full p-4 h-60" src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div>
        <button className="px-3 py-2 border rounded font-extrabold border-lime-700 text-orange-400 bg-purple-950 mr-4">{remote_or_onsite}</button>
        <button className="px-3 py-2 border rounded font-extrabold border-lime-700 text-red-800 bg-purple-950">{job_type}</button>
    </div>
    <div className="flex ">
       <h2 className="flex items-center mr-8"><MdLocationOn className="text-3xl mr-4"></MdLocationOn>{location}</h2>
       <h2 className="flex items-center">< BiSolidDollarCircle className="text-3xl mr-4"></ BiSolidDollarCircle>{salary}</h2>
    </div>
    <div className="card-actions ">
      <button className="btn bg-[#9873FF]">View Details</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Job;