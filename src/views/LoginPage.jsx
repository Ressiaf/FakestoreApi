import {
    checkingAuthentication,
    startLoginWithEmailPassword,
} from "../store/auth/thunks";
import { useForm } from "../hooks/useForm";
import FormInput from "../components/Gobals/Forms/FormInputs";
import FormButton from "../components/Gobals/Buttons/FormButton";
import { FiLogIn } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const initialForm = {  
    email: "admin@admin.com",
    password: "123456",
};

const LoginPage = () => {
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { email, password, onInputChange, isFormValid } = useForm(initialForm);

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
        console.log(email, password);
        dispatch(startLoginWithEmailPassword({ email, password }));
        } catch (error) {
        console.log(error);
        } finally {
        dispatch(checkingAuthentication());
        if (isFormValid === true)
            navigate("/", {
            replace: true,
            });
        }
    };

    return (
        <div className=" h-fit m-6 py-20 mb-12 flex flex-col items-center  ">
        <div className="min-h-full flex items-center justify-center py-4 px-6+ sm:px-6 lg:px-6 font-robo -z-20  ">
            <div className="max-w-md w-full space-y-8 ">
            <h2 className=" text-center text-3xl font-bold text-gray-900 leading-6  tracking-widest ">
                Login
            </h2>
            <form className=" space-y-6" onSubmit={handleSubmit}>
                {/* Email input */}
                <FormInput
                type="email"
                placeholder="Correo electronico "
                label="Ingrese su email :"
                name="email"
                value={email}
                onChange={onInputChange}
                ></FormInput>
                {/* Password input */}
                <FormInput
                type="password"
                placeholder="Password"
                label="Ingrese su contraseña :"
                name="password"
                value={password}
                onChange={onInputChange}
                ></FormInput>
                <div className="flex items-center justify-between pt-2.5  text-gray-50/80 pb-8 ">
                <div className="flex justify-center">
                    <div className=" mr-8">
                    {/* Login button  */}
                    <FormButton
                        text="Login"
                        type="submit"
                        color="blackL"
                        icon={<FiLogIn className="inline ml-2" />}
                    />
                    </div>
                    <hr />
                </div>
                </div>
            </form>
            <div className="flex  justify-between  w-80   ">
                <p className="text-md">No tenes cuenta ?</p>
                <span> - </span>
                <Link to={"/register"} className=" text-black font-bold text-lg ">
                Registrate
                </Link>
            </div>
            </div>
        </div>
        </div>
    );
};

export default LoginPage;
