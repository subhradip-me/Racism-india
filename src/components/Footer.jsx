import React from 'react'

export default function Footer() {
  return (
    <footer className="py-16 px-6 bg-zinc-900 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-light text-white mb-2">
              Hate Speech Detection Against Indians
            </h3>
            <p className="text-zinc-400 font-light">
              Research Demonstration Website
            </p>
          </div>
          
          <div className="space-y-3 mb-8">
            <p className="text-sm text-zinc-500">
              Developed under academic supervision
            </p>
            <p className="text-sm text-zinc-500">
              Department of Computer Science • [Your University Name] • 2026
            </p>
            <p className="text-sm text-zinc-600 font-medium">
              ⚠ For research and educational use only
            </p>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-sm text-zinc-600">
            © 2026 Hate Speech Detection Research. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
