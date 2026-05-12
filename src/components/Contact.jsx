const Contact = () => {
  return (
    <div className="bg-(--bg-section) dark:bg-(--bg-section-dark) mt-20 p-3 lg:p-5 flex flex-col items-center w-full">
      <div className="flex flex-col items-center text-center">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3">
          Contact Us
        </h1>
        <p className="roboto text-base">
          Have a Question, feedback, or need help? We`re here to support <br /> you at
          every step of your preparation
        </p>
      </div>
      <div className="flex items-center md:flex-row  flex-col xl:w-[80%] lg:w-[90%] md:w-full justify-between mt-10">
        <div className="flex flex-col  md:max-w-[40%] sm:mb-7 ">
          <div className="mb-5">
            <h2  className="text-lg md:text-xl roboto text-gray-700 dark:text-gray-200 ">
              Our support team will Usually responds within 24  hours. feel free
              to reach out anytime.
            </h2>
                  <div className="h-0.5 dark:bg-gray-700 w-full rounded-2xl bg-gray-200 mt-5 mb-5"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300" >support@kankoorPrep.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Afghanistan, Kabul, kaj educational center</p>
          </div>
          <div>
            <h2 className="text-lg md:text-xl roboto text-gray-700 dark:text-gray-200 ">
              Our support team will Usually responds within 24 hours. feel free
              to reach out anytime.
            </h2>
            <div className="h-0.5 dark:bg-gray-700 w-full rounded-2xl bg-gray-200 mt-5 mb-5"></div>
            <p className="text-sm text-gray-600 dark:text-gray-300">support@kankoorPrep.com</p>
            <p className="text-sm text-gray-600 dark:text-gray-300">Afghanistan, Khost, shabrooz educational center</p>
          </div>
        </div>
        <div className="w-full lg:w-[45%] md:w-[45%] xl:w-[50%]">
          <form action="post" className="flex flex-col bg-gray-50 dark:bg-blue-950 shadow-lg  rounded-lg xl:p-10 lg:p-8 md:p-6 sm:p-5">
            <h1 className="text-xl font-bold text-center ">Contact Form</h1>
            <input type="text"  className="w-full p-1 rounded-lg border border-gray-500 outline-none mt-5 focus:outline-0 text-base" placeholder="Full Name" />
            <input type="email" className="w-full p-1 px-2 rounded-lg border border-gray-500 outline-none mt-2 focus:outline-0 text-base" placeholder="Email Address" />
            <textarea cols="20" rows="7" className="w-full p-1 px-2 rounded-lg border border-gray-500 outline-none mt-2 focus:outline-0 text-base"></textarea>
            <button onClick={(e)=> e.preventDefault()} className="bg-primary mt-3 rounded-md text-gray-100 text-lg outline-none py-1">send messages</button>
            <p className="text-sm mt-2 text-gray-500">Your information is safe and will never be shared</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
