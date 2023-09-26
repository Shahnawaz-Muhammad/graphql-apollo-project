import { useQuery } from "@apollo/client";
import Category from "../../components/category";
// import Hero from "../../components/hero";
import { GET_ALL_QUOTES } from "../../utils/queries";

const Home = () => {
  const { loading, error, data } = useQuery(GET_ALL_QUOTES);

  if (loading) return;
  <>
    <h1>Loading...</h1>
  </>;

  if (error) {
    console.log(error.message);
  }

  if (data) {
    console.log(data);
  }

  return (
    <main>
      {/* <Hero /> */}

      <Category />
      <div className="w-full p-5 bg-gray-100 rounded-xl flex justify-center">
        <div className="w-full mx-auto max-w-screen-xl px-4 py-10 m-4 md:flex md:flex-col md:gap-2 ">
          {data.quotes.map((item) => (
            <>
              <div className="flex flex-col gap-1 bg-gray-300 p-3 rounded-lg shadow-md shadow-gray-600">
                <h1 className="text-2xl">&quot;{item.quote}&quot;</h1>
                {/* <p>{item.postedBy._id}</p> */}
                <p className="text-sm italic">{item.postedBy.firstName}~</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
