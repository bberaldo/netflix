import { CaretRight } from 'phosphor-react';
import React, { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signup = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { user, signUp } = UserAuth();
	const navigate = useNavigate();

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			await signUp(email, password);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<div className="w-full h-screen">
				<img
					src="/img/bg/login.jpg"
					alt="Faça login para aproveitar milhões de filmes, séries e documentários!"
					className="hidden sm:block absolute w-full h-full object-cover"
				/>
				<div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
				{/* <div className="fixed w-full px-4 py-24 z-50">
					<div className="max-w-[452px] h-[600px] mx-auto bg-black/75 text-white">
						<div className="max-w-[320px] mx-auto py-16">
							<h1 className="text-3xl font-bold">Sign Up</h1>
							<form
								onSubmit={handleSubmit}
								className="w-full flex flex-col py-4"
							>
								<div className="relative">
									<input
										onChange={e => {
											setEmail(e.target.value);
										}}
										id="form_email"
										type="email"
										placeholder="  "
										autoComplete="email"
										className="my-2 bg-zinc-700 rounded outline-none block w-full peer px-2.5 pb-2 pt-5"
									/>
									<label
										for="form_email"
										class="absolute duration-300 text-zinc-300 text-sm transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>
										E-mail
									</label>
								</div>

								<div className="relative">
									<input
										onChange={e => {
											setPassword(e.target.value);
										}}
										id="form_pass"
										type="password"
										placeholder="  "
										autoComplete="current-password"
										className="my-2 bg-zinc-700 rounded outline-none block w-full peer px-2.5 pb-2 pt-5"
									/>
									<label
										for="form_pass"
										className="absolute duration-300 text-zinc-300 text-sm transform -translate-y-4 scale-75 top-7 z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>
										Senha
									</label>
								</div>
								<button className="bg-red-600 py-3 my-6 rounded font-bold">
									Cadas
								</button>
								<div className="flex justify-between items-center text-sm text-gray-600">
									<p>
										<input
											type="checkbox"
											name=""
											id=""
											className="mr-2"
										/>
										Remember me
									</p>
									<p>Need Help?</p>
								</div>
								<p className="py-8">
									<span className="text-gray-600">
										Already have subscribe to Netflix?
									</span>
									{'  '}
									<Link to="/login">Sign In</Link>
								</p>
							</form>
						</div>
					</div>
				</div> */}

				<div className="fixed w-full h-screen flex place-content-center items-center text-white">
					<div className="flex gap-y-8 flex-col">
						<div className="max-w-xl mx-auto  flex items-center flex-col">
							<h1 className="text-6xl text-center font-bold pb-3">
								Filmes, séries e muito mais. Sem limites.
							</h1>
							<span className="text-2xl">
								Assista onde quiser. Cancele quando quiser.
							</span>
						</div>
						<div>
							<div className="flex items-center flex-col">
								<span className="text-xl pb-3">
									Pronto para assistir? Informe seu email para
									criar ou reiniciar sua assinatura.
								</span>
								<div className="relative w-full grid grid-cols-12">
									<input
										type="text"
										name="email"
										id="form_email"
										placeholder="  "
										className="py-5 px-3 outline-none w-full col-span-9 peer block"
									/>
									<label
										htmlFor="form_email"
										className="absolute duration-300 text-zinc-500 text-sm transform -translate-y-4 scale-75 top-[1.35rem] z-10 origin-[0] left-2.5  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4"
									>
										E-mail
									</label>
									<button className="col-span-3 text-xl font-bold flex items-center place-content-center bg-red-600 rounded-sm">
										Vamos lá <CaretRight />
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Signup;
