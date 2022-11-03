import { Link } from "react-router-dom";
import logo from ".././assets/logo.png";
import { CircleAnimation } from "../components/CirclesAnimation/CirclesAnimation";
import { ButtonLoginRegister } from "../components/Button/ButtonLoginRegister";

import FormRegister from "../components/Register/Form/formRegister";

export const Register = () => {
  return (
    <main className="w-screen	h-screen flex items-center	justify-center 	flex-col bg-radial bg-center bg-no-repeat bg-888px		">
      <aside className="flex flex-col  items-center	  max-w-xs  w-[22.25rem] pb-5	 bg-bg-formRegister	z-10 rounded-md">
        <nav className=" flex  flex-col">
          <Link to="">
            <img src={logo} alt="Logo" className=" h-7 ml-3 mt-7		mb-2	" />
          </Link>
          <p className="text-grey-1 text-base	 mb-6	">Crie sua conta</p>
        </nav>
        <FormRegister />
        <p className="text-grey-1 text-base	 mb-3 mt-3	">Ja possui uma conta?</p>
        <ButtonLoginRegister
          text={"Entrar"}
          style={
            "bg-grey-1 w-[17.188rem] h-[2.563rem] text-xs  rounded-md	font-semibold shadow-[0_2px_30px_-10px_rgba(0,0,0,0.3)]  hover:shadow-button-register/100 hover:ease-out	duration-300 text-white	"
          }
        />
      </aside>
      <CircleAnimation />
    </main>
  );
};
