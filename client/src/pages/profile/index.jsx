import { useQuery } from "@apollo/client";
import bgImg from "../../assets/images/bg-img.jpg";
import { GET_PROFILE } from "../../utils/queries";

const Profile = () => {
  const { data, loading, error } = useQuery(GET_PROFILE);
  console.log();

  if (loading) return <h1> Loading ...</h1>;

  if (error) {
    console.log(error.message);
  }

  return (
    <div className="">
      <div className="h-96 w-full ">
        <img
          src={bgImg}
          alt=""
          className="h-full w-full object-cover object-center "
        />
        <div className="w-full flex  relative mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="w-32 h-32  absolute  -bottom-16 ">
            <img
              src={bgImg}
              alt=""
              className="w-full h-full rounded-full border-4 border-white object-cover"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-20">
        <div>
          <h1 className="text-2xl font-bold mb-1">
            {data.profile.firstName} {data.profile.lastName}
          </h1>
          <p className="text-gray-600 font-normal">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
            magnam reprehenderit perspiciatis ipsa aperiam optio beatae quam
            sunt voluptates repellendus ducimus, quo culpa. Ad esse mollitia
            repudiandae quo pariatur quaerat!
          </p>
        </div>

        <div className="py-10">
          <div className="flex flex-col gap-4">
            {data.profile.quotes.map((quote, index) => {
              return <h1 key={index}>{quote.quote}</h1>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
