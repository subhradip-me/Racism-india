import React from 'react'

export default function Architecture() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 mb-4">
            🧩 System Architecture
          </h2>
          <p className="text-zinc-600">
            End-to-end processing pipeline
          </p>
        </div>

        <div className="bg-zinc-50 rounded-2xl p-12 border border-zinc-200">
          <div className="flex flex-col items-center space-y-8">
            {/* Input Text */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 text-center">
                <div className="text-2xl mb-2">📝</div>
                <div className="font-medium text-zinc-900">Input Text</div>
                <div className="text-sm text-zinc-500 mt-1">User-provided text content</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-3xl text-zinc-400">↓</div>

            {/* Preprocessing */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <div className="font-medium text-zinc-900">Preprocessing</div>
                <div className="text-sm text-zinc-500 mt-1">Tokenization & vectorization</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-3xl text-zinc-400">↓</div>

            {/* BLSTM Model */}
            <div className="w-full max-w-md">
              <div className="bg-zinc-900 text-white rounded-xl p-6 shadow-lg border border-zinc-800 text-center">
                <div className="text-2xl mb-2">🧠</div>
                <div className="font-medium">BLSTM Model</div>
                <div className="text-sm text-zinc-400 mt-1">Bidirectional sequence analysis</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-3xl text-zinc-400">↓</div>

            {/* Multi-label Output */}
            <div className="w-full max-w-md">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-200 text-center">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-medium text-zinc-900">Multi-label Output</div>
                <div className="text-sm text-zinc-500 mt-1">Classification probabilities</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-zinc-500">
          Static architecture overview • Research demonstration only
        </div>
      </div>
    </div>
  )
}
