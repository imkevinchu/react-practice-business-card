import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

const Button = ({ btnType }) => {
  return btnType === "email" ? (
    <div className={`Button ${btnType}`}>
      <MdEmail />
      <p>Email</p>
    </div>
  ) : (
    <div className={`Button ${btnType}`}>
      <FaLinkedin />
      <p>LinkedIn</p>
    </div>
  );
};

export default Button;
