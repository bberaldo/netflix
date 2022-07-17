import React, { Fragment, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../firebase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { Dialog, Transition } from '@headlessui/react';
import { X } from 'phosphor-react';

const Movie = ({ item }) => {
	const [like, setLike] = useState(false);
	const [saved, setSaved] = useState(false);
	let [isOpen, setIsOpen] = useState(false);
	const { user } = UserAuth();

	const movieID = doc(db, 'users', `${user?.email}`);

	const saveShow = async () => {
		if (user?.email) {
			setLike(!like);
			setSaved(true);
			await updateDoc(movieID, {
				savedShows: arrayUnion({
					id: item.id,
					title: item.title,
					img: item.backdrop_path,
				}),
			});
		} else {
			alert('Por favor, faça login para favoritar!');
		}
	};

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	return (
		<>
			<div
				className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2"
				onClick={openModal}
			>
				<img
					className="w-full h-auto block"
					src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
					alt={item?.title}
				/>
				<div className="absolute top-0 left-o w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
					<p className="white-space-normal text-sm md:text-sm font-bold flex justify-center items-center h-full  text-center">
						{item?.title}
						<Transition appear show={isOpen} as={Fragment}>
							<Dialog
								as="div"
								className="relative z-10"
								onClose={closeModal}
							>
								<Transition.Child
									as={Fragment}
									enter="ease-out duration-300"
									enterFrom="opacity-0"
									enterTo="opacity-100"
									leave="ease-in duration-200"
									leaveFrom="opacity-100"
									leaveTo="opacity-0"
								>
									<div className="fixed inset-0 bg-black bg-opacity-25" />
								</Transition.Child>

								<div className="fixed inset-0 overflow-y-auto">
									<div className="flex min-h-full items-center justify-center p-4 text-center">
										<Transition.Child
											as={Fragment}
											enter="ease-out duration-300"
											enterFrom="opacity-0 scale-95"
											enterTo="opacity-100 scale-100"
											leave="ease-in duration-200"
											leaveFrom="opacity-100 scale-100"
											leaveTo="opacity-0 scale-95"
										>
											<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded bg-white text-left align-middle shadow-xl transition-all">
												<div className="max-w-5xl">
													<div className="relative z-10">
														<img
															src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
															alt={item?.title}
															className="relative z-10 w-full h-full"
														/>
														<div className="absolute z-20 bottom-0 pl-4 bg-gradient-to-t from-black to-transparent w-full items-end grid h-full"></div>
													</div>
													<div className="bg-black pb-10 px-5 relative z-20">
														<p className="text-3xl text-white py-3 absolute -top-16">
															{item?.title}
														</p>
														<div className="flex gap-3">
															<p className="text-green-500 font-semibold">
																{
																	item?.vote_average
																}
																<span className="text-xs">
																	/10
																</span>
																{'  '}
																relevante
															</p>
															<p className="text-white">
																{item?.release_date.slice(
																	0,
																	4
																)}
															</p>
														</div>

														<p className="text-sm text-zinc-400 py-4">
															{item?.overview}
														</p>
													</div>
													<div>
														<div
															className="absolute z-20 top-2 right-2 text-white rounded-full bg-black w-fit py-2 px-2 cursor-pointer"
															onClick={closeModal}
														>
															<X
																size={18}
																color="#ffffff"
															/>
														</div>
													</div>
												</div>
											</Dialog.Panel>
										</Transition.Child>
									</div>
								</div>
							</Dialog>
						</Transition>
					</p>
					<p onClick={saveShow}>
						{like ? (
							<FaHeart className="absolute top-4 left-2 text-gray-300" />
						) : (
							<FaRegHeart className="absolute top-4 left-2 text-gray-300" />
						)}
					</p>
				</div>
			</div>
		</>
	);
};

export default Movie;
