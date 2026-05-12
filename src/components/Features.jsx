import {
  LuBrainCircuit,
  LuMonitorCheck,
  LuShieldCheck,
  LuBadgeCheck,
  LuLanguages,
  LuBookOpenCheck,
} from "react-icons/lu";

const Features = () => {
  const features = [
    {
      id: 1,
      icon: LuBrainCircuit,
      heading: "Real exam simulation",
      subHeading: "practice with mock test need to analyze that follows the real exam pattrens, diffculty level, and timing so there will be no suprise on test day.",
    },
    {
      id: 2,
      icon: LuMonitorCheck,
      heading: "Detailed Performance",
      subHeading: "get instant insights into your strengths and weaknesses with detailed score breakdowns, accuracy rates and time analysis.",
    },
    {
      id: 3,
      icon: LuShieldCheck,
      heading: "Secure and fair testing",
      subHeading: "Our platform uses advanced security and monitoring system to ensure fair, transparent, and cheating-free testing experience for every user.",
    },
    {
      id: 4,
      icon: LuBadgeCheck,
      heading: "Fast and precise results",
      subHeading: "Get instant, highly accurate results as soon as you finish your test, allowing you to quickly review your performance and plan your next steps without delay.",
    },
        {
      id: 5,
      icon: LuLanguages,
      heading: "Multi-Language Support",
      subHeading: "Access the platform in multiple languages so you can learn, practice, and perform at your best in the language your most comfortable with.",
    },
        {
      id: 6,
      icon: LuBookOpenCheck,
      heading: "Personalized Learning",
      subHeading: "Enjoy a personalized learning journey with adoptive recommandations that keeps you motivated while focusing on improving weaker areas.",
    }

  ];
  return (
    <div id="features" className="bg-(--bg-section) dark:bg-(--bg-section-dark) mt-20 py-10 md:p-5 p-3 flex flex-col items-center rounded-lg">
      <div className="text-center">
        <h1 className="text-2xl lg:text-3xl font-meduim mb-3  font-bold">Features of kankoorPrep Platform</h1>
        <p className="roboto text-lg">
          A centeralized digital system that manages Examinations, evaluation <br />
          and results with transparency and control
        </p>
      </div>
      <div className="h-1 dark:bg-gray-700 w-[35%] rounded-2xl bg-gray-200 mt-5"></div>

      <div className="grid lg:grid-cols-3 gird-cols-1 md:grid-cols-2 gap-4 mt-10">
        {
            features.map((feature)=>{
                const Icon = feature.icon
                return (
                    <div key={feature.id} className="flex gap-2 bg-gray-50 shadow-lg p-3 rounded-lg dark:bg-gray-800 items-center">
                        <Icon  className="text-7xl text-accent "/>
                        <div className="flex-1">
                        <h1 className="dark:text-accent text-primary-hover sm:text-xl text-lg">{feature.heading}</h1>
                        <p className="text-xs md:text-sm roboto">{feature.subHeading}</p>
                        </div>
                    </div>
                )
            })
        }
      </div>
    </div>
  );
};

export default Features;
