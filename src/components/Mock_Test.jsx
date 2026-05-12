import image from "../../public/right-hero.png";
import { LuAlarmClock, LuZap, LuSearchCheck } from "react-icons/lu";

const Mock_Test = () => {
  const features = [
    {
      id: 1,
      icon: LuAlarmClock,
      heading: "Timed exam simulation",
      subheading:
        "Practice under real exam time pressure with a live countdown and section limits",
    },
    {
      id: 2,
      icon: LuZap,
      heading: "Instant & Quick results",
      subheading:
        "Get Your test score immediately with accuracy and section breakdown",
    },
    {
      id: 3,
      icon: LuSearchCheck,
      heading: "Detailed Question Review",
      subheading:
        "Review correct answers, mistakes, and skipped questions to improve faster",
    },
  ];
  return (
    <div className="mt-20 flex flex-col items-center justify-center w-full">
      <h1 className="sm:text-2xl text-xl md:text-3xl lg:text-4xl  font-bold tracking-wide text-center">
        ABOUT MOCK TESTS
      </h1>
      <div className="h-1 dark:bg-gray-700 w-[25%] rounded-2xl mb-5 bg-gray-200 mt-5 "></div>
      <div className="w-full bg-(--bg-section) p-3 rounded-lg dark:bg-(--bg-section-dark) md:p-5">
      <div className="mt-10 flex lg:flex-row flex-col items-center justify-center gap-10">
        <div className="">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-wide">
            Experience Real Exam-level Mock Tests and Practices that Boost Your
            Score
          </h1>
          <p className="roboto mt-5 tracking-wide">
            simulate real exam conditions, track your performance in detail, and
            improve with personalized insights - all in one powerfull testing
            platform designed to help you succeed with confidence.
          </p>
          <div className="mt-10 flex gap-4">
            <button className="bg-primary text-white px-3 py-2 rounded-sm hover:bg-primary-hover transition text-sm sm:text-base max-w-45 duration-300 cursor-pointer">
              Start Free Mock Test
            </button>
            <button className="border border-primary  rounded-sm hover:bg-primary-hover cursor-pointer transition duration-300 hover:text-gray-100 px-3 text-sm sm:text-base py-2 max-w-45">
              How it Works
            </button>
          </div>
        </div>
        <div>
          <img src={image} alt="image" />
        </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
            {
                features.map((nav)=>{
                    const Icon = nav.icon
                    return(
                        <div className="flex gap-2 shadow-lg rounded-md dark:bg-gray-800 bg-gray-50 p-3 w-full items-center justify-center">
                            <div className="text-6xl text-accent"><Icon/></div>
                            <div>
                                <h1 className="text-xl mb-0.5 dark:text-accent text-primary">{nav.heading}</h1>
                                <p className="roboto">{nav.subheading}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
      </div>
    </div>
  );
};

export default Mock_Test;
