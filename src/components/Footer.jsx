import { LuBookOpen } from "react-icons/lu"
import { Link } from "react-scroll";

const Footer = () => {
    const Nav = [
    { id: 1, name: "Home", path: "home" },
    { id: 2, name: "Features", path: "features" },
    { id: 3, name: "Mock Test", path: "mock_test" },
    { id: 4, name: "Pricing", path: "pricing" },
    { id: 5, name: "Faqs", path: "faqs" },
    { id: 6, name: "Contact", path: "contact" },
  ];
  return (
    <div className=" bg-gray-600 dark:bg-gray-800 dark:text-gray-300 text-gray-200 p-3 lg:p-6 mt-20 rounded-t-xl">
    <div className=" gap-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-content-center p-3 border-b border-gray-50">
      <div className=" text-center flex flex-col items-center">
        <span className="flex items-center gap-1 text-xl font-bold mb-5">
          <LuBookOpen className="text-primary" />
          <p className="poppins">KankoorPrep</p>
        </span>
        <p className="text-sm">KankoorPrep helps students practice smarter and perform better through real Exam-level mock tests.</p>
      </div>
      <div>
        <h2 className="text-xl text-center font-bold mb-4">Quick Links</h2>
              <nav className="text-md items-center flex flex-col">
          {Nav.map((nav) => {
            return (
              <Link
                key={nav.id}
                to={nav.path}
                smooth = {true}
                duration={600}
                offset={-70}
                className="cursor-pointer hover:text-primary-hover transition duration-300"
              >
                {nav.name}
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex-col flex items-center">
        <h2 className="font-bold text-xl mb-5">Legal</h2>
        <p>terms & conditions </p>
        <p>Privacy and policy</p>
      </div>
      <div className="flex-col flex items-center ">
        <h2 className="font-bold text-xl mb-5">support</h2>
        <p>support@kankoorprep.com</p>
        <p>payments supporter via <span className="font-bold">EasyLoad </span></p>
      </div>
    </div>
    <div className="text-center mt-2"><p>&copy;<span className="font-bold"> kankoorPrep.</span> all rights reserved</p></div>
    </div>
  )
}

export default Footer







// import { Link } from 'react-scroll'
// // import style from './Footer.module.css'
// import { FaBookOpen } from 'react-icons/fa'
// const Footer = () => {
//   return (
//     <section className={style.footer}>
//       <div className={style.contents}>
//         <div className={style.card}>
//           <div className={style.head}>
//             <FaBookOpen />
//             <h1>KanKoorPrep</h1>
//           </div>
//           <p>KanKoorPrep helps student practice smarter and perform
//           better through real Exam-level mock tests.</p>
//         </div>
//         <div className={style.card}>
//           <h1>Quick Links</h1>
//           <div className={style.link_items}>
//         <ul>
//           <li><Link to="home" smooth={true} duration={500} activeClass="active"
//           spy={true} offset={-70}>Home</Link></li>
//           <li><Link to="features" smooth={true} duration={500} activeClass="active"
//           spy={true} offset={-70}>Features</Link></li>
//           <li><Link to="mock_test" smooth={true} duration={500} activeClass="active"
//           spy={true} offset={-50}>Mock Test</Link></li>
//           <li><Link to="pricing" smooth={true} duration={500} activeClass="active"
//           spy={true} offset={-80}>Pricing</Link></li>
//           <li><Link to="faqs" smooth={true} duration={500} activeClass="active"
//           spy={true}>FaQs</Link></li>
//           <li><Link to="contact" smooth={true} duration={500} activeClass="active"
//           spy={true} offset={-50}>Contact</Link></li>
//         </ul>
//       </div>
//         </div>
//         <div className={style.card}>
//           <h1>Legal</h1>
//           <p>Terms & <span>Conditions</span></p>
//           <p>Privacy Policy</p>
//         </div>
//         <div className={style.card}>
//           <h1>support</h1>
//           <p>support@KanKoorPrep.com</p>
//           <p>Payments supported via <span>EsayLoad</span></p>
//         </div>
//       </div>
//       <p>&copy;<span>2026 KankoorPrep. </span> All rights reserved.</p>
//     </section>
//   )
// }

// export default Footer
