import React from 'react'
import { useState } from 'react'
import { createShortUrl } from '../api/shortUrl.api';

const UrlForm = () => {

  const [url, setUrl] = useState("https://github.com");
  const [shortUrl, setShortUrl] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async () => {
    const shortUrl = await createShortUrl(url);
    setShortUrl(shortUrl);
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1000);
  }


  return (
    <>
      <div className="space-y-4">
        <div>
          <label htmlFor="url" className="block text-sm font-medium text-gray-700 mb-2">
            Enter your URL
          </label>
          <input
            type="text"
            id="url"
            value={url}
            onInput={(e) => setUrl(e.target.value)}
            placeholder="https://example.com/very-long-url"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
          />
        </div>

        {/* {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )} */}

        <button
          onClick={handleSubmit}
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
        >
          Shorten URL
        </button>
      </div>

      {shortUrl && (
        <div className="mt-6 p-4 rounded-lg">
          <h3 className="text-sm font-medium mb-2">Your shortened URL:</h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={shortUrl}
              readOnly
              className={`flex-1 px-3 py-2 bg-white border rounded text-sm ${copied
                  ? "bg-green-200 border-green-300"
                  : ""
                }`}
            />
            <button
              onClick={handleCopy}
              className={`px-3 py-2 text-sm rounded transition-colors duration-200 ${copied
                ? "bg-green-500 text-white hover:bg-green-600 opacity-50 cursor-not-allowed"
                : "bg-gray-200 hover:bg-gray-300"
                } `}
              title="Copy to clipboard"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      )}

    </>
  )
}

export default UrlForm