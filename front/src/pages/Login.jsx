import { useForm } from "react-hook-form";
import { InputField } from "../components/InputField";
import { SubmitButton } from "../components/SubmitButton.jsx";
import { Link } from "react-router-dom";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log("Dados enviados:", data);
  };

  return (
    <div className="relative pt-45 flex flex-col flex-grow min-h-[95vh] items-center justify-center">
      <div className="bg-white p-[30px] flex flex-col justify-center w-[90%] sm:w-[500px] rounded-xs">
        <h2 className="font-bold text-xl text-center mb-2 sm:text-2xl">
          <span className="text-black">&lt;</span>Faça seu Login
          <span className="text-black">&gt;</span>
        </h2>
        <small className="text-dark text-center">
          Não possui uma conta? Cadastre-se{" "}
          <Link className="underline" to="/signup">
            aqui
          </Link>
        </small>

        <form className="my-4" onSubmit={handleSubmit(onSubmit)}>
          <InputField
            label="Email *"
            name="email"
            type="email"
            placeholder="Insira seu email"
            register={register}
            error={errors.email?.message}
            validation={{
              required: "Email é obrigatório",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                message: "Email inválido",
              },
            }}
          />

          <InputField
            label="Senha *"
            name="senha"
            type="password"
            placeholder="Insira sua senha"
            register={register}
            error={errors.senha?.message}
            validation={{
              required: "Senha é obrigatória",
              minLength: {
                value: 6,
                message: "A senha deve ter pelo menos 6 caracteres",
              },
            }}
          />

          <SubmitButton label="Entrar" />
        </form>
      </div>
    </div>
  );
};
