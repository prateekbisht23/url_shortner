import React, { useState } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { getCurrentUser, logoutUser } from '../api/user.api.js'
import { useDispatch } from 'react-redux'
import { logout } from '../store/slice/authSlice.js'

const NavBar = () => {

    const [loading, setLoading] = useState(false)
    const [logoutConfirmation, setLogoutConfirmation] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate();

    const queryClient = useQueryClient()

    const { data: user, isLoading } = useQuery({
        queryKey: ['currentUser'],
        queryFn: getCurrentUser,
        retry: false,
        staleTime: 5,
    })

    console.log("NavBar user: ", user?.user?.name)

    const handleLogout = async () => {
        setLoading(true)
        try {
            const response = await logoutUser()

            dispatch(logout())
            setLogoutConfirmation(false)

            queryClient.setQueryData(['currentUser'], null)
            queryClient.removeQueries({ queryKey: ['userUrls'] })
            navigate({ to: '/' });

            console.log("test: ", response.message)
        } catch (error) {
            console.error('Logout failed:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <nav className="bg-white shadow-sm border-b border-gray-200">
            <div className="mx-20">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Icon on the left */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.102m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold text-gray-900">URLShort</span>
                        </Link>
                    </div>

                    {/* User info/Login button on the right */}
                    <div className="flex items-center space-x-4">
                        {isLoading ? (
                            <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
                        ) : user?.user ? (
                            <div className="flex items-center space-x-3">
                                <div className="flex items-center space-x-2">
                                    <img
                                        src={user.user.avatar}
                                        alt={user.user.name}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <span className="text-sm font-medium text-gray-700">{user.user.name}</span>
                                </div>

                                <button
                                    onClick={() => setLogoutConfirmation(true)}
                                    className="text-gray-600 hover:text-red-600 font-bold px-3 py-2 text-sm hover:cursor-pointer transition-colors duration-200"
                                >
                                    Logout
                                </button>

                                {/* Logout Confirmation Modal */}
                                {logoutConfirmation && (
                                    <div className="fixed inset-0 flex items-center justify-center z-50">
                                        <div className="absolute inset-0 bg-gray-700 opacity-90 backdrop-blur-3xl z-40"></div>
                                        <div className="bg-white rounded-lg p-6 max-w-sm w-full mx-4 z-50">
                                            <h3 className="text-lg font-medium text-gray-900 mb-4">
                                                Confirm Logout
                                            </h3>
                                            <p className="text-sm text-gray-600 mb-6">
                                                Are you sure you want to logout?
                                            </p>
                                            <div className="flex space-x-3">
                                                <button
                                                    onClick={handleLogout}
                                                    disabled={loading}
                                                    className="flex-1 bg-red-600 hover:bg-red-700 disabled:bg-red-400 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                                >
                                                    {loading ? 'Logging out...' : 'Yes'}
                                                </button>
                                                <button
                                                    onClick={() => setLogoutConfirmation(false)}
                                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                                                >
                                                    Cancel
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link
                                to="/auth"
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
                            >
                                Login/ Register
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
