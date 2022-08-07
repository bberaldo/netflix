import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Login = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const { user, logIn } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		setError(' ');
		try {
			await logIn(email, password);
			navigate('/');
		} catch (error) {
			console.log(error);
			setError(error.message);
		}
	};
	return (
		<div className="w-full h-screen">
			<img
				src="/img/bg/login.jpg"
				alt="Faça login para aproveitar milhões de filmes, séries e documentários!"
				className="hidden sm:block absolute w-full h-full object-cover"
			/>
			<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
			<div className="fixed w-full px-4 py-24 z-50">
				<div className="max-w-[452px] h-[600px] mx-auto bg-black/75 text-white rounded-md">
					<div className="max-w-[320px] mx-auto py-16">
						<h1 className="text-3xl font-extrabold">Entrar</h1>
						{error ? (
							<p className="p-3 bg-red-400 my-2">{error}</p>
						) : null}
						<form
							onSubmit={handleSubmit}
							className="w-full flex flex-col py-4"
						>
							<div className="relative">
								<input
									onChange={e => setEmail(e.target.value)}
									type="email"
									id="floating_filleds"
									placeholder="  "
									autoComplete="email"
									className="my-2 bg-zinc-700 rounded outline-none block w-full peer px-2.5 pb-2 pt-5"
								/>
								<label
									htmlFor="floating_filleds"
									className="absolute duration-300 text-zinc-300 text-sm transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
								>
									E-mail
								</label>
							</div>
							<div className="relative">
								<input
									onChange={e => setPassword(e.target.value)}
									type="password"
									placeholder="  "
									autoComplete="current-password"
									className="my-2 bg-zinc-700 rounded outline-none block w-full peer px-2.5 pb-2 pt-5"
								/>
								<label
									htmlFor="floating_filleds"
									className="absolute duration-300 text-zinc-300 text-sm transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
								>
									Senha
								</label>
							</div>
							<button className="bg-red-600 py-3 my-6 rounded font-bold">
								Entrar
							</button>
							<div className="flex justify-between items-center text-sm text-zinc-400">
								<p className="flex justify-between items-center">
									<input
										type="checkbox"
										name=""
										id=""
										className="mr-2 appearance-none h-4 w-4 border border-zinc-400 rounded-sm bg-zinc-300"
									/>
									Lembre-se de mim
								</p>
								<p>Precisa de ajuda?</p>
							</div>
							<p className="py-8">
								<span className="text-zinc-400">
									Novo por aqui?
								</span>
								{'  '}
								<Link to="/signup">Assine agora.</Link>
							</p>
							<p className="text-zinc-400 text-xs">
								Esta página é protegida pelo Google reCAPTCHA
								para garantir que você não é um robô. Saiba
								mais.
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
