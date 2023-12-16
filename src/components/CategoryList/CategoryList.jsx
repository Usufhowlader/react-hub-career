import { useEffect, useState } from "react";
import Category from "../Category/Category";


const CategoryList = () => {
    const [categoryList,setCategoryList]=useState([]);
    useEffect(()=>{
        fetch('categories.json')
        .then(res=>res.json())
        .then(data=>setCategoryList(data));
    },[])
    return (
        <div className="mt-8">
            <h2 className="text-5xl text-center">Job Category List</h2>
            <p className="text-center my-8">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="grid grid-cols-2 gap-2">
            {
                categoryList.map(category=><Category key={category.id} category={category}></Category>)
            }
        </div>
        </div>
        
    );
};

export default CategoryList;