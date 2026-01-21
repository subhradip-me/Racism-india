import React, { useState } from 'react'
import { analyzeHateSpeech } from '../services/api'

export default function ModelDemo() {
  const [inputText, setInputText] = useState('')
  const [results, setResults] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [error, setError] = useState(null)

  const analyzeText = async () => {
    if (!inputText.trim()) return
    
    setIsAnalyzing(true)
    setError(null)
    
    try {
      // Call the actual API
      const data = await analyzeHateSpeech(inputText)
      setResults(data)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to analyze text. Please try again.')
      console.error('Analysis error:', err)
    } finally {
      setIsAnalyzing(false)
    }
  }

  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 mb-4">
            🔍 Model Demonstration
          </h2>
          <p className="text-zinc-600">
            Test the hate speech detection model with your own text
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-zinc-200 p-8">
          {/* Text Input */}
          <div className="mb-6">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste a sentence or paragraph here..."
              className="w-full h-40 px-4 py-3 border border-zinc-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:border-transparent resize-none text-zinc-900"
            />
          </div>

          {/* Analyze Button */}
          <div className="mb-8">
            <button
              onClick={analyzeText}
              disabled={!inputText.trim() || isAnalyzing}
              className="w-full bg-zinc-900 text-white px-8 py-4 rounded-lg font-medium transition-all duration-300 hover:bg-zinc-800 disabled:bg-zinc-300 disabled:cursor-not-allowed"
            >
              {isAnalyzing ? 'Analyzing...' : 'Analyze Text'}
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-800">
                ⚠ {error}
              </p>
            </div>
          )}

          {/* Results */}
          {results && (
            <div className="border-t border-zinc-200 pt-8">
              <h3 className="text-xl font-medium text-zinc-900 mb-6">Results</h3>
              
              {/* Prediction */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-zinc-600 font-medium">Prediction:</span>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    results.prediction === 'HATE SPEECH' 
                      ? 'bg-red-100 text-red-700' 
                      : 'bg-green-100 text-green-700'
                  }`}>
                    {results.prediction}
                  </span>
                </div>
              </div>

              {/* Categories */}
              <div>
                <h4 className="text-sm font-medium text-zinc-700 mb-4">Categories:</h4>
                <div className="space-y-3">
                  {results.categories.map((category, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-zinc-700">{category.name}</span>
                        <span className="text-sm font-medium text-zinc-900">
                          {category.score.toFixed(0)}%
                        </span>
                      </div>
                      <div className="w-full bg-zinc-200 rounded-full h-2">
                        <div
                          className="bg-zinc-900 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${category.score}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                <p className="text-xs text-amber-800">
                  ⚠ Confidence scores shown for analysis only. This is a research model and should not be used for production purposes.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
