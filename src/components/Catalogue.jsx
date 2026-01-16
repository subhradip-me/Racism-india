import React from 'react'

export default function Catalogue() {
  const catalogueItems = [
    {
      icon: '🧠',
      title: 'Model Architecture',
      items: [
        'Bidirectional LSTM (BLSTM)',
        'Context-aware sequence modeling',
        'Multi-label classification output',
        'Optimized for Indian context'
      ]
    },
    {
      icon: '📊',
      title: 'Dataset',
      items: [
        'Jigsaw Toxic Comment Dataset',
        'Annotated multi-label toxicity',
        'Extended with Indian-specific samples',
        'Balanced hate/non-hate distribution'
      ]
    },
    {
      icon: '⚡',
      title: 'Capabilities',
      items: [
        'Code-mixed text (Hinglish)',
        'Implicit hate detection',
        'Multi-label classification',
        'Context-aware analysis'
      ]
    }
  ]

  return (
    <div className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 mb-4">
            📚 Model & Dataset Catalogue
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto">
            Technical overview of the model architecture, dataset, and system capabilities
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {catalogueItems.map((item, index) => (
            <div 
              key={index}
              className="bg-zinc-50 rounded-2xl p-8 border border-zinc-200 hover:border-zinc-300 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-medium text-zinc-900 mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.items.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-zinc-600">
                    <span className="text-zinc-400 mt-1">-</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
