import React from 'react'
import UrlForm from '../components/UrlForm'
import UserUrls from '../components/UserUrl'

const DashboardPage = () => {
  return (
    <div className="flex items-center justify-center p-7">
      <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">URL Shortener</h1>
          <p className="text-gray-600 text-sm">Transform your long URLs into short, shareable links</p>
        </div>

        <UrlForm />
        <UserUrls />

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-500">
          <p>Free, fast, and secure URL shortening service</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardPage