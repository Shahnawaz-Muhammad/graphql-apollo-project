import foodBg from "../../assets/images/category/food.jpeg";
import ceremonies from "../../assets/images/category/ceremonies.jpeg";
import nature from "../../assets/images/category/nature.jpeg";
import homeinteriors from "../../assets/images/category/home-interiors.jpeg";
import faces from "../../assets/images/category/faces.jpeg";
import classicDesign from "../../assets/images/category/classic-design.jpeg";

const Category = () => {
  const categoryBg = [
    { id: 1, title: "Food", bgImg: foodBg },
    { id: 2, title: "Home Interior", bgImg: homeinteriors },
    { id: 3, title: "Ceremonies", bgImg: ceremonies },
    { id: 4, title: "Nature", bgImg: nature },
    { id: 5, title: "Faces", bgImg: faces },
    { id: 6, title: "Classic Design", bgImg: classicDesign },
  ];
  return (
    <div className=" w-full shadow my-5">
      <div className="w-full mx-auto max-w-screen-xl p-4 m-4 md:flex md:items-center md:justify-center">
        <h1 className="text-3xl font-bold uppercase text-gray-800">
          Categories
        </h1>
      </div>
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-x-8 gap-y-8">
          {categoryBg.map((cat) => (
            <div key={cat.id} className="w-full h-[20rem]  relative rounded-xl cursor-pointer">
              <img
                src={cat.bgImg}
                className="w-full h-full bg-cover rounded-xl hover:bg-black hover:bg-blend-darken"
              />
              <div className=" w-full h-full  flex justify-center items-center">
                <h2 className="absolute top-[50%]  font-light text-white text-2xl z-50">
                  {cat.title}
                </h2>
              </div>
              <div
                className="w-full h-full bg-black bg-opacity-70 absolute top-0 left-0 hover:bg-black hover:bg-opacity-50 transition-all duration-300 rounded-xl "
                style={{ mixBlendMode: "darken" }}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
