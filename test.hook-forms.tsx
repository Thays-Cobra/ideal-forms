import { SubmitHandler, useForm } from "react-hook-form";

type Inputs = {
	name: string;
	email: string;
};

export default function Test() {
	const {
		register,
		watch,
		handleSubmit,
		formState: { errors },
	} = useForm<Inputs>();
	const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

	console.log(watch("name"));

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input defaultValue="teste" {...register("name")} />
			<input {...register("email", { required: true })} />
			{errors.email && <span>Esse campo é obrigatório</span>}
			<input type="submit" />
		</form>
	);
}
