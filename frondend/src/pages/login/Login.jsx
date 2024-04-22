import React, { useState } from 'react'

const Login = () => {
    const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
		//e.preventDefault();
		console.log(username)
	};
  return (
<div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
			<div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-300'>
					Login
					<span className='text-rose-600'> Real-Chat</span>
				</h1>

                <form onSubmit={handleSubmit}>
                <div>
						<label className='label p-2'>
							<span className='label-text italic text-lg '>Username</span>
						</label>
						<input
							type='text'
							placeholder='Enter username'
							className='w-full input input-bordered h-10  border-rose-300  border-2 shadow-md'
							value={username}
							onChange={(e) => setUsername(e.target.value)}
						/>
					</div>

                    <div>
						<label className='label'>
							<span className="label-textitalic text-lg ">Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10   border-rose-300  border-2 shadow-md'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

                    <a href='#' className='text-sm  hover:underline hover:text-rose-600 mt-2 inline-block'>
						{"Don't"} have an account?
					</a>

                    <div>
					<button className='btn btn-block btn-sm mt-2 bg-rose-600 hover:bg-rose-500 border-none shadow-sm text-white'>
    Login
</button>

					</div>

                    </form>
			</div>
		</div>
  )
}

export default Login