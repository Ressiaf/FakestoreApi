import {  useState, useMemo } from "react";
import { useForm} from "../hooks/useForm";
// import { useNavigate } from "react-router-dom";
import { useDispatch , useSelector } from "react-redux";
// import { errorsFirebase } from "../helpers/errorsFirebase";
// import { formValidate } from '../helpers/formValidate';
import FormAlert from "../components/Gobals/Forms/FormAlert";
import { Link, useNavigate } from "react-router-dom";
import FormInput from "../components/Gobals/Forms/FormInputs";
import FormButton from "../components/Gobals/Buttons/FormButton";
import {FaRegFileAlt} from "react-icons/fa"
import {startCreatingUserWithEmail } from "../store/auth/thunks"

    const initialForm = {
        displayName: "beto1234",
        email: "admin@admin.com",
        password: "123456",
    }

    const formValidations = {
        email: [
        [(value) => value.includes("@"), "El correo debe tener un @"],
        [
            (value) =>
            value.match(
                /^[a-zA-Z0-9.!#$%&   *+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/
            ),
            "El correo debe tener un formato valido",
        ],
        ],
        password: [
        [
            (value) => value.length >= 6,
            "El password debe tener al menos 6 caracteres",
        ],
        ],
        displayName: [
        [(value) => value.length >= 1, "El nombre es obligatorio"],
        [(value) => value.length >= 6, "El nombre debe tener al menos 6 letras"]
        ]
    };
const Register =  ( ) => {

    const dispatch = useDispatch( );

    const navigate = useNavigate( );

    const [formSubmited, setFormSubmited] = useState(false);

    const {
        formState,
        displayName,
        email,
        password,
        onInputChange,
        isFormValid,
        displayNameValid,
        emailValid,
        passwordValid,
    } = useForm( initialForm, formValidations );



    const onSubmit = (event) => {
        event.preventDefault();
        try {
            setFormSubmited(true);
            if (!isFormValid) return;
            dispatch(startCreatingUserWithEmail(formState))
        } catch (error) {
            console.log(error);
        } finally {
            if (isFormValid === true)
            navigate("/login", {
                replace: true,
            });
        }
        
    }
    console.log(isFormValid,);


return (
    <>

        <div className="min-h-full flex items-center justify-center py-4 px-6+ sm:px-6 lg:px-6 font-robo -z-20">
        
        <div className="max-w-md w-full space-y-8 ">
            <h2 className=" text-center text-3xl font-bold text-gray-900 leading-6  tracking-widest ">
                    Registrarse
            </h2>
            <form onSubmit={ onSubmit }>
                {/* Name input */}
                <FormInput
                    type=""
                    placeholder="Nombre de usuario"
                    label="Ingrese su nombre:"
                    name="displayName"
                    value={displayName}
                    onChange={onInputChange}
                    // error={errors.repassword}
                    // {...register("repassword", {
                    // validate: validateEquals(getValues("password")),
                    // })}
                >
                    <FormAlert error={ displayNameValid } />
                </FormInput>
                {/* Email input */}
                <FormInput
                    type="email"
                    placeholder="Correo electronico"
                    label="Ingrese su email :"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    // error={errors.email}
                    // {...register("email", {
                    // required,
                    // pattern: patternEmail,
                    // })}
                >
                    {/* <FormAlert error={errors.email} /> */}
                </FormInput>
                {/* Password input */}
                <FormInput
                    type="password"
                    placeholder="Contraseña"
                    label="Ingrese su contraseña :"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                    // error={errors.password}
                    // {...register("password", {
                    // minLength,
                    // validate: validateTrim,
                    // })}
                >
                    {/* <FormAlert error={errors.password} /> */}
                </FormInput>
                <div className="flex flex-col sm:flex-row justify-between items-center text-gray-50/80 pt-2">
                    <FormButton 
                        text="Registrarse" 
                        type="submit" 
                        icon={<FaRegFileAlt className="inline ml-2"/>}
                        />
                    <div className="ml-4 mt-2 text-black">
                        <h6>Ya tenes una cuenta ? </h6>
                        <Link
                            to={"/login"}
                            className="font-bold pl-24 text-lg "
                        >
                            Ingresa
                        </Link >
                    </div>
                </div>
                </form>
            </div>
        </div>
    </>
);
};

export default Register;
