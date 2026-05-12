import { FaCheck } from "react-icons/fa";

const Pricing = () => {
  const plans = [
    {
      title: "Basic",
      name: "Free Plan",
      price: 0,
      currency: "AFN",
      features: [
        {
          text: [
            "3 Mock tests per Month",
            "5 individual subject practices",
            "Muti-Subject support",
          ],
          included: true,
        },
        {
          text: ["Basic performance tracking", "limited features"],
          included: false,
        },
      ],
      button: "Start Free",
      payment: "Pay easily via EasyLoad",
      subheading: "No hidden fees cancel anytime",
    },
    {
      title: "Most Popular",
      name: "Monthly Plan",
      price: 250,
      currency: "AFN",
      features: [
        {
          text: [
            "15 Mock tests per Month",
            "30 individual subject practices",
            "advance performance analytics",
            "Leaderboard and Ranking",
            "Muti-Subject support",
          ],
          included: true,
        },
      ],
      button: "subscribe monthly",
      payment: "Pay easily via EasyLoad",
      subheading: "No hidden fees cancel anytime",
    },
    {
      title: "Pro",
      name: "Yearly Plan",
      price: 5000,
      currency: "AFN",
      features: [
        {
          text: [
            "unlimited Mock tests per Month",
            "unlimited individual subject practices",
            "advance performance analytics",
            "Leaderboard and Ranking",
            "Muti-Subject support",
          ],
          included: true,
        },
      ],
      button: "subscribe yearly",
      payment: "Pay easily via EasyLoad",
      subheading: "No hidden fees cancel anytime",
    },
  ];
  return (
    <div className="mt-15 w-full bg-(--bg-section) p-3 rounded-lg dark:bg-(--bg-section-dark) md:p-5 flex items-center flex-col">
      <div className="max-w-180">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-bold mt-10 text-center">
          Find the Plan that fits your Learning Goals
        </h1>
        <p className="text-center mt-2 md:text-lg tracking-wide">
          Start Practicing today with flexible Pricing. Choose from a free,
          Monthly,or Pro Plan. Payments are easy via EasyLoad, and all Plans
          include access to Mock tests and Practice for multiple Subjects.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-15">
        {plans.map((plan, index) => {
          return (
            <div
              className={`flex flex-col items-center mb-5 justify-center mt-10 shadow-xl p-3 rounded-xl  ${plan.title == "Most Popular" ? "bg-primary text-white transform xl:scale-110" : "bg-gray-50 dark:bg-gray-800"}`}
              key={index}
            >
              <div className="flex flex-col items-center justify-center">
                <h1 className="text-lg bg-primary-hover dark:bg-accent dark:text-indigo-900 -mt-4 mb-3 px-4 py-1 rounded-2xl text-white">
                  {plan.title}
                </h1>
                <h2 className="text-2xl font-bold">{plan.name}</h2>
                <div className="border-b-2 w-full items-center justify-center mt-2 mb-1 border-gray-400 text-2xl font-bold flex gap-3 dark:border-gray-600">
                  <span>{plan.price}</span>
                  <span>{plan.currency}</span>
                </div>
                <div>
                  {plan.features.map((feature, index) => {
                    return (
                      <ul key={index} className="flex flex-col gap-3 mt-5">
                        {feature.text.map((item, index) => {
                          return (
                          <li key={index}>
                            {feature.included ? (
                              <div className="flex items-center gap-3 text-lg roboto tracking-wide">
                                <FaCheck className="text-emerald-400" />
                                {item}
                              </div>
                            ) : (
                              <div className="flex items-center gap-3 text-lg roboto tracking-wide">
                                <FaCheck className="text-gray-400" />
                                {item}
                              </div>
                            )}
                          </li>
                          )
                        })}
                      </ul>
                    );
                  })}
                </div>
                <div className="flex flex-col mt-5 items-center">
                  <button className="bg-accent text-gray-50 px-3 py-2 w-full rounded-lg mb-3">{plan.button}</button>
                                    <h2 className="text-md">{plan.payment}</h2>
                  <h3 className="text-sm">{plan.subheading}</h3>

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
