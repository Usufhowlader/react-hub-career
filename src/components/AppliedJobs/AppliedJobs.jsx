import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";
import { MdLocationOn } from "react-icons/md";
import { BiSolidDollarCircle } from "react-icons/bi";
import { MdCheck } from "react-icons/md";

const AppliedJobs = () => {
    const jobs =useLoaderData();
    const [appliedJobs,setAppliedJobs]=useState([]);
    const [displayJobs, setDisplayJobs]=useState([]);
    const handleJobsFilter = filter=>{
        if(filter === 'all'){
             setDisplayJobs(appliedJobs);
        }
        else if(filter === 'remote'){
            const remoteJobs =appliedJobs.filter(job =>job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if(filter === 'onsite'){
            const oneSiteJobs =appliedJobs.filter(job=>job.remote_or_onsite === 'Onsite');
            setAppliedJobs(oneSiteJobs);
        }
    }
    useEffect(()=>{
        const storedJobId =getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied =jobs.filter(job=>storedJobId.includes(job.id))
            const jobsApplied =[];
            for(const id of storedJobId){
                const job =jobs.find(job=>job.id ===id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            setAppliedJobs(jobsApplied);
            setDisplayJobs(appliedJobs);
            // console.log(jobs,storedJobId, jobsApplied);
        }
       
    },[jobs])
    return (
        <div>
          {/* <ul>
          {
            appliedJobs.map(job=><li key={job.id}><span>{job.job_title}{job.company_name}</span></li>)
           }
          </ul> */}

      <div className="justify-end">
      <details className="dropdown ">
            <summary className="m-1 btn">Filter By< MdCheck className="text-xl"></MdCheck></summary>
             <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={()=>handleJobsFilter('all')}><a>All</a></li>
                <li onClick={()=>handleJobsFilter('remote')}><a>Remote</a></li>
                <li onClick={()=>handleJobsFilter('onsite')}><a>Onsite</a></li>
            </ul>
       </details>
      </div>





          <ul>
          {
            displayJobs.map(job=><li key={job.id}>
                <div className="flex justify-between items-center p-4 bg-gray-200 my-6">
                  <div className="flex items-center">
                  <img className="w-60 rounded" src={job.logo} alt="" />
                  <div className=" ml-12">
                  <h2 >{job.job_title}</h2>
                  <p className="mb-2">{job.company_name}</p>
                  <div>
                     <button className="px-3 py-2 border rounded font-extrabold border-lime-700 text-orange-400 bg-purple-950 mr-4">{job.remote_or_onsite}</button>
                     <button className="px-3 py-2 border rounded font-extrabold border-lime-700 text-red-800 bg-purple-950">{job.job_type}</button>
                  </div>
                  <div className="flex mt-2">
                     <h2 className="flex items-center mr-8"><MdLocationOn className="text-3xl mr-4"></MdLocationOn>{job.location}</h2>
                     <h2 className="flex items-center">< BiSolidDollarCircle className="text-3xl mr-4"></ BiSolidDollarCircle>{job.salary}</h2>
                  </div>
                  </div>
                  </div>
                  <div>
                  <button className="btn bg-[#9873FF]">View Details</button>
                  </div>
                </div>
                </li>)
          }
          </ul>
        </div>
    );
};
export default AppliedJobs;