import { useQuery } from "@apollo/client";
// import Category from "../../components/category";
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

      {/* <Category /> */}
      <div className="w-full p-5 bg-gray-300 rounded-xl flex justify-center">
        <div className="w-full flex flex-col gap-3 max-w-screen-2xl">
          {data.quotes.map((item) => (
            <>
              <div className="flex justify-between">
                <h1>{item.quote}</h1>
                <p>{item.postedBy._id}</p>
                <p>{item.postedBy.firstName}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Home;
