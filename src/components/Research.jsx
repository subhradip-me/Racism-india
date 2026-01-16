import React, { useState } from 'react'

export default function Research() {
  const [openSection, setOpenSection] = useState(null)

  const sections = [
    {
      id: 'abstract',
      title: 'Abstract',
      content: 'This research presents a Bidirectional Long Short-Term Memory (BLSTM) based approach for detecting hate speech specifically targeted against Indians in online text. The model addresses the growing concern of anti-Indian sentiment in digital spaces, utilizing natural language processing techniques to identify both explicit and implicit forms of hate speech.'
    },
    {
      id: 'problem',
      title: 'Problem Statement',
      content: 'Online platforms have witnessed a significant rise in hate speech targeting specific communities, including Indians. Traditional keyword-based detection systems fail to capture the nuanced and context-dependent nature of hate speech, particularly in code-mixed languages like Hinglish. This research aims to develop an intelligent system capable of understanding contextual hatred in diverse linguistic expressions.'
    },
    {
      id: 'methodology',
      title: 'Methodology',
      content: 'The research employs a Bidirectional LSTM architecture that processes text sequences in both forward and backward directions, capturing contextual information more effectively. The model is trained on the Jigsaw Toxic Comment Dataset, augmented with Indian-specific hate speech samples. Multi-label classification enables the system to identify various dimensions of toxicity including threats, insults, and identity-based hate.'
    },
    {
      id: 'results',
      title: 'Results',
      content: 'The BLSTM model demonstrates strong performance in detecting hate speech against Indians, achieving high accuracy in multi-label classification tasks. The bidirectional architecture proves particularly effective in understanding context-dependent hate expressions and code-mixed text. Evaluation metrics show significant improvement over traditional approaches in handling implicit hate speech patterns.'
    },
    {
      id: 'limitations',
      title: 'Limitations & Future Work',
      content: 'Current limitations include challenges with highly nuanced sarcasm, evolving slang terminology, and regional language variations. Future work will focus on expanding the training dataset with more diverse Indian language samples, incorporating transformer-based architectures for improved context understanding, and developing real-time deployment capabilities for social media platforms.'
    }
  ]

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id)
  }

  return (
    <div className="py-24 bg-zinc-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-light text-zinc-900 mb-4">
            📄 Research Overview
          </h2>
          <p className="text-zinc-600">
            Detailed insights into the research methodology and findings
          </p>
        </div>

        <div className="space-y-4">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="bg-white rounded-xl border border-zinc-200 overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-zinc-50 transition-colors duration-200"
              >
                <span className="text-lg font-medium text-zinc-900">
                  ▸ {section.title}
                </span>
                <span className={`text-zinc-400 transition-transform duration-300 ${
                  openSection === section.id ? 'rotate-90' : ''
                }`}>
                  →
                </span>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openSection === section.id ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 pb-6 pt-2">
                  <p className="text-zinc-600 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
