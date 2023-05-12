import { gorilla } from "../plugins/useAxios";
import React, { useState } from 'react';

function Loginadmin() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // Fungsi untuk menghandle perubahan nilai email
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    // Fungsi untuk menghandle perubahan nilai password
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log(email, password);
        try {
            const response = await gorilla.post('/login', { email, password });

            // Login berhasil, lakukan sesuatu (misalnya menyimpan token)
            const accessToken = response.data.access_token;
            localStorage.setItem('accessToken', accessToken);

            // Arahkan pengguna ke halaman /admin
            window.location.href = '/admin';
        } catch (error) {
            // Login gagal, tangani error (misalnya menampilkan pesan error)
            setError('Login failed. Please check your credentials.');
            console.error(error);
        }
    };

    return (
        // <div className="bg-zinc-700 w-screen h-screen flex flex-col items-center justify-center text-left text-black">
        //     <h1>Watch this shit</h1>
        // </div>
        <div className="bg-zinc-700 w-screen h-screen flex flex-col items-center pl-[350px] justify-center text-left text-black">
            <form onSubmit={handleSubmit}>
                <div className="mb-6">
                    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                    <input type="email" value={email} onChange={handleEmailChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="name@gmail.com" required />
                </div>
                <div className="mb-6">
                    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                    <input type="password" value={password} onChange={handlePasswordChange} className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required />
                </div>
                <div className="flex justify-between gap-4">
                    <div>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
                    </div>
                    <div className="bg-transparent py-2">
                        <a className="text-white hover:text-blue-800 " href="/registrasi">Registrasi</a>
                    </div>
                </div>
            </form>
        </div>

    )
}

export default Loginadmin;