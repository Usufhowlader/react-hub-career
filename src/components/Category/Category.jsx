

const Category = ({category}) => {
    const {logo,category_name,availability}=category;
    return (
        <div className="my-4 ">
            <div className="card card-compact  bg-gray-200 ">
  <figure><img className="p-4"  src={logo} alt="Shoes" /></figure>
  <div className="card-body text-center">
    <h2 className="text-2xl ">{category_name}</h2>
    <p>{availability}</p>
    
  </div>
</div>
        </div>
    );
};

export default Category;