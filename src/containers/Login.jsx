
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from '../store/auth/thunks'
import { useForm } from '../hooks/useForm'
// import FormAlert from "../components/Gobals/Forms/FormAlert";
import FormInput from "../components/Gobals/Forms/FormInputs";
import FormButton from "../components/Gobals/Buttons/FormButton";
import { FiLogIn } from "react-icons/fi";
import { FaGoogle } from "react-icons/fa";
import { useDispatch ,useSelector } from "react-redux";
import { useMemo  } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/auth/authSlice';
const initialForm = {
    email: "admin@admin.com",
    password: "123456",
};

const Login = ( ) => {
    
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const { email, password, onInputChange , formState , isFormValid} = useForm(initialForm);

    const { status } = useSelector((state) => state.auth);

    const isChecking = useMemo(() => status === "checking", [status]);

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            console.log(email, password );
            dispatch( startLoginWithEmailPassword( { email, password } ) );
        } catch (error) {
            console.log(error);
        }finally {
            dispatch(checkingAuthentication())  
            if (isFormValid === true)
            navigate("/", {
                replace: true,
            });
        }
    };


    const onGoogleSignIn = () => {
        try {
            dispatch(checkingAuthentication())  
            dispatch(startGoogleSignIn());
            console.log(status);
        } catch (error) {
            console.log(error);
        } finally {
            if (!isChecking )
                navigate("/", {
                    replace: true,
                });
        }
    }



    return (
        <>
        <div className="min-h-full flex items-center justify-center py-4 px-6+ sm:px-6 lg:px-6 font-robo -z-20  ">
            <div className="max-w-md w-full space-y-8 ">
                <h2 className=" text-center text-3xl font-bold text-gray-900 leading-6  tracking-widest ">
                    Login
                </h2>
                <form className=" space-y-6" onSubmit={handleSubmit} >
                    {/* Email input */}
                    <FormInput
                        type="email"
                        placeholder="Correo electronico "
                        label="Ingrese su email :"
                        name='email'
                        value={email}
                        onChange={onInputChange}
                    >
                    </FormInput>
                    {/* Password input */}
                    <FormInput
                        type="password"
                        placeholder="Password"
                        label="Ingrese su contraseña :"
                        name="password"
                        value={password}
                        onChange={onInputChange}
                    >
                    </FormInput>
                    <div className="flex items-center justify-between pt-2.5  text-gray-50/80 pb-8 ">
                        <div className="flex justify-center">
                            <div className=" mr-8">
                                {/* Login button  */}
                                <FormButton
                                    text="Login"
                                    type="submit"
                                    color="blackL"
                                    loading={!isChecking}
                                    icon={<FiLogIn className="inline ml-2" />}
                                />
                            </div>
                                <hr />
                            <div className="ml-2.5">
                                {/* Login w google button  */}
                                <FormButton
                                    text="Login with Google"
                                    type="button"
                                    color="blackL"
                                    onClick={onGoogleSignIn}
                                    loading={!isChecking}
                                    icon={<FaGoogle className="inline ml-2" />}
                                />
                            </div>
                        </div>
                    </div>

                                </form> 
            </div>
        </div>
        </>
        
    );
};


export default Login
