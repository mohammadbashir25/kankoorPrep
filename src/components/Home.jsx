import image from '../../public/right-hero.png'

const Home = () => {
  return (
    <div id='home'>
    <div className="bg-(--bg-section) dark:bg-(--bg-section-dark) flex mt-5 gap-5 lg:gap-0 xl:gap-10 items-center rounded-lg md:p-5 p-3 flex-col lg:flex-row">
      <div className='lg:mt-20 mt-5 text-center flex  flex-col lg:text-left'>
        <h1 className='text-3xl md:text-5xl lg:text-6xl dark:text-gray-200 text-gray-700'>Afghanistan National digital Kankoor system</h1>
        <p className='mt-4 roboto text-xl tracking-wide dark:text-gray-300'>Apply, track and Prepare for the National Kankoor Examination all in one secure platform.</p>
        <div className='flex gap-3 mt-10'>
            <button className='bg-primary px-3 py-2 rounded-lg outline-none border-none hover:bg-primary-hover cursor-pointer transition duration-300 text-gray-100 text-md'>Create Account</button>
            <button className='border border-primary px-3 rounded-lg hover:bg-primary-hover cursor-pointer transition duration-300 hover:text-gray-100'>Login</button>
        </div>
      </div>
      <div className='w-full'>
        <img src={image} alt="score card" />
      </div>
    </div>
    </div>
  )
}

export default Home
