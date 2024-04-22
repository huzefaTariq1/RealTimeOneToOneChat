import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import useSignup from "../../hooks/useSignup";

const SignUp = () => {

    const [inputs, setInputs] = useState({
		fullName: "",
		username: "",
		password: "",
		confirmPassword: "",
		gender: "",
	});

    const { loading, signup } = useSignup();

    const handleCheckboxChange = (gender) => {
		setInputs({ ...inputs, gender });
	};
  

    const handleSubmit = async (e) => {
		e.preventDefault();
        await signup(inputs)
	};
	return (
		<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Sign Up <span className='text-rose-600'> Real-Chat</span>
				</h1>

				<form  onSubmit={handleSubmit}>
					<div>
						<label className='label p-2'>
							<span className='text-lg label-text italic'>Full Name</span>
						</label>
						<input
							type='text'
							placeholder='John Doe'
							className='w-full input input-bordered  h-10  border-rose-300  border-2 shadow-md'
							value={inputs.fullName}
							onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
						/>
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-lg label-text italic'>Username</span>
						</label>
                        <input
							type='text'
							placeholder='johndoe'
							className='w-full input input-bordered h-10  border-rose-300  border-2 shadow-md'
							value={inputs.username}
							onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-lg label-text italic'>Password</span>
						</label>
                        <input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10  border-rose-300  border-2 shadow-md'
							value={inputs.password}
							onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-lg label-text italic'>Confirm Password</span>
						</label>
                        <input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered h-10  border-rose-300  border-2 shadow-md'
							value={inputs.confirmPassword}
							onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
						/>
					</div>

					<GenderCheckbox onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

                    <Link to='/login' className='text-sm  hover:underline hover:text-rose-600 mt-2 inline-block'>
						Already have an account? Login
					</Link>
<div>
                    <button className='btn btn-block btn-sm mt-2 bg-rose-600 hover:bg-rose-500 border-none shadow-sm text-white'  disabled={loading}>
                    {loading ? <span className='loading loading-spinner'></span> : "Sign Up"}
</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;