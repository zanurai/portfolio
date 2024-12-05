import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import Year from "../year/year";

const Footer = () => {
  return (
    <>
      <section className=" ml-12 bg-gradient-to-b from-pink-200 via-pink-200/50 to-pink-50">
        <div className="py-3 px-10 border-b" id="contact-section">
          <div>
            <h1 className=" py-3 font-bold text-textcolor text-h3">Contact</h1>
            <div className="flex  text-[25px] gap-3 text-textcolorpara cursor-pointer ">
              <Link to="https://www.instagram.com/zanu_rae/">
                <FaInstagram />
              </Link>
              <Link to="https://www.facebook.com/zanu.rai.37">
                <FaFacebookSquare />
              </Link>
              <Link to="https://www.linkedin.com/in/janaki-rai-637b50270/">
                <FaLinkedin />
              </Link>
            </div>
          </div>
          <div className="py-5 font-fontFamily">
            <p>
              <span className="font-bold">
                Github Link:{" "}
                <Link
                  to="https://github.com/zanurai"
                  className="font-semibold border border-pink-200 p-1 rounded-md bg-transparent shadow-lg text-gray-400"
                >
                  Git
                </Link>
              </span>
            </p>

            <p className="mb-2">
              <span className="font-bold">Email: </span>zanu.thulung@gmail.com
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="text-center py-3">
          <h1>
            ©Copyright <Year />
          </h1>
        </div>
      </section>
    </>
  );
};

export default Footer;
