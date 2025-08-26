import React, { useState } from 'react'
import { loginUser } from '../api/user.api'
import { useDispatch } from 'react-redux';
import { login } from '../store/slice/authSlice.js';
import { useNavigate } from '@tanstack/react-router';


const LoginForm = ({ setLogin }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        setLoading(true)
        setError('')

        try {
            const data = await loginUser(email, password)

            dispatch(login(data.user));
            navigate({ to: '/dashboard' });

            console.log("login successful")
        } catch (err) {
            setError(err.message || 'Login failed')
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen w-lg flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full space-y-8 bg-white p-8 rounded-xl shadow-md">
                <div className="text-center">
                    <h1 className="text-3xl font-extrabold text-gray-900">Login</h1>
                    <p className="mt-2 text-sm text-gray-600">
                        Login to save your shortened URLs
                    </p>
                </div>

                <div className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1.5">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1 ml-1.5">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="**********"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition duration-200"
                            required
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm bg-red-100 border border-red-200 p-3 rounded-md">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            disabled={loading}
                            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200"
                        >
                            {loading ? 'Logging in...' : 'LogIn'}
                        </button>
                    </div>
                </div>

                <div className="text-center py-2">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <span onClick={() => setLogin(false)} className="cursor-pointer text-blue-600 hover:underline">
                            Register
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
