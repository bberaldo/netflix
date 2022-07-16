import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Navbar from './components/Navbar';
import { AuthContextProvider } from './context/AuthContext';
import Login from './pages/login';
import Signup from './pages/signup';
import Account from './pages/account';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
	return (
		<>
			<AuthContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<Signup />} />
					<Route
						path="/account"
						element={
							<ProtectedRoute>
								<Account />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
