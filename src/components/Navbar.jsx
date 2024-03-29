import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
	const { user, logOut } = UserAuth();
	const navigate = useNavigate();

	const handleLogout = async () => {
		try {
			await logOut();
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	const location = useLocation();

	return (
		<div className="flex items-center justify-between p-4 z-[100] absolute w-full">
			<Link to="/">
				<h1 className="text-red-600 font-bold text-4xl cursor-pointer">
					NETFLIX
				</h1>
			</Link>
			{user?.email ? (
				<div>
					<Link to="/account">
						<button className="text-white pr-4">Minha Conta</button>
					</Link>
					<button
						onClick={handleLogout}
						className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
					>
						Sair
					</button>
				</div>
			) : (
				<div>
					{location.pathname !== '/signup' ? (
						<>
							{/* <Link to="/login">
								<button className="text-white pr-4">
									Entrar
								</button>
							</Link> */}
							<Link to="/signup">
								<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
									Cadastrar
								</button>
							</Link>
						</>
					) : (
						<Link to="/login">
							<button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
								Entrar
							</button>
						</Link>
					)}
				</div>
			)}
		</div>
	);
};

export default Navbar;
