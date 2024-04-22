import GenderCheckbox from "./GenderCheckbox";

const SignUp = () => {
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-rose-600'> Real-Chat</span>
				</h1>

				<form>
					<div>
						<label className='label p-2'>
							<span className='text-lg label-text italic'>Full Name</span>
						</label>
						<input type='text' placeholder='John Doe' className='w-full input input-bordered  h-10   border-rose-300  border-2 shadow-md' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-lg label-text italic'>Username</span>
						</label>
						<input type='text' placeholder='johndoe' className='w-full input input-bordered h-10   border-rose-300  border-2 shadow-md' />
					</div>

					<div>
						<label className='label'>
							<span className='text-lg label-text italic'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10  border-rose-300  border-2 shadow-md'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-lg label-text italic'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10 border-rose-300  border-2 shadow-md'
						/>
					</div>

					<GenderCheckbox />

                    <a href='#' className='text-sm  hover:underline hover:text-rose-600 mt-2 inline-block'>
						Already have an account?
					</a>

					<div>
                    <button className='btn btn-block btn-sm mt-2 bg-rose-600 hover:bg-rose-500 border-none shadow-sm text-white'>
    Sign Up
</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;