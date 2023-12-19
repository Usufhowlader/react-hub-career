import { useLoaderData, useParams } from "react-router-dom";
import { AiOutlineDollar } from "react-icons/ai";
import { FiCalendar } from "react-icons/fi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from "../Utility/localstorage";
const JobDetails = () => {
    const jobs =useLoaderData();
    const {id}=useParams();
    const idInt =parseInt(id);
    const job =jobs.find(job =>job.id === idInt);
   const handleApplyJob=()=>{
         saveJobApplication(idInt);
      toast('You have applied Successfully');
   }

    return (
        <div>
            <h2 className="text-4xl font-bold text-center my-4">Job Details</h2>
           <div className="grid grid-cols-4 gap-3 my-4">
              <div className="border md:col-span-3 p-4 bg-indigo-300">
              <p>Job Description:{job.job_description}</p>
              <p className="my-4">Job Responsibility:{job.job_responsibility}</p>
              <h2> Educational Requirements:</h2>
              {job.educational_requirements}
              <h2 className="mt-4">Experiences:</h2>
              {job.experiences}
              </div>
              <div className="border p-2 bg-red-200">
                   <h2 className="text-2xl mb-4">Job Details</h2>
                   <hr/>
                   <p className="flex items-center my-4">< AiOutlineDollar className="text-xl mr-2"></AiOutlineDollar>Salary: {job.salary}</p>
                   <p className="flex items-center mb-5"><FiCalendar className="text-xl mr-2"></FiCalendar> Job Title:{job.job_title}</p>
                    <h2 className="text-xl mb-4">Contact Information</h2>
                    <hr/>
                    <p className="flex items-center my-4"><LuPhone className="text-xl mr-2"></LuPhone>Phone: {job.contact_information.phone}</p>
                    <p className="flex items-center "><MdOutlineEmail className="text-xl mr-2"></MdOutlineEmail>Email: {job.contact_information.email}</p>
                    <div className="flex">
                    <FaLocationDot className="text-2xl mr-2"></FaLocationDot>
                     <p className=" mb-5">Address: {job.contact_information.address}</p>
                    
                    </div>
                    
                   <button onClick={handleApplyJob} className=" btn btn-primary w-full">Apply Now</button>
              </div>
           </div>
           <ToastContainer />
        </div>
    );
};

export default JobDetails;