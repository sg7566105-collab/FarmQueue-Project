import Hero from "../components/Hero";
import Section1 from "../section1/section1";
import Section2 from "../section2/section2";
import Todayinfo from "../todaysinfo/Todayinfo";

function Home() {
  return (
    <>
      <div className="flex items-start gap-5 ">
        {/* hero and card container */}
        <div className="flex flex-col  ml-3">
          <Hero />
          <Section1 />
        </div>
        {/* tableinfoo div  */}
        <div className="bg-green-100 px-5 w-full mx-2 rounded-3xl pb-5 flex flex-col gap-10 mt-5">
            <h1 className="font-bold text-2xl mt-3 ">आज की जानकरी</h1>
          <Todayinfo />
        </div>
      </div>
      <Section2/>
    </>
  );
}

export default Home;
