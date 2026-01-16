import React from 'react'

export default function Abstract() {
    return (
        <div className='w-full bg-zinc-50 py-24'>
            {/*Abstract Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-16">
                    <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-4">
                        📄 Abstract
                    </h2>
                </div>
            </div>
            {/*Abstract Content */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-16">
                    <p className="text-zinc-600 text-lg leading-relaxed">
                        The rapid growth of social media and online communication platforms has reshaped digital interaction worldwide,
                        offering unprecedented connectivity while also enabling the rise of targeted hate speech. Hate speech directed
                        toward Indians—whether based on nationality, ethnicity, culture, religion, or linguistic identity—has become a
                        concerning issue across platforms such as Twitter, YouTube, Reddit, and Instagram. This form of targeted
                        hostility manifests through derogatory remarks, stereotypes, racial slurs, and abusive expressions that can fuel
                        discrimination, deepen social divides, and inflict psychological harm on individuals and communities. Ensuring
                        safer, more respectful digital environments requires robust and context-aware systems capable of identifying such
                        harmful content.
                        <br />
                        <br />
                        This project focuses on the development of a specialized machine learning-based system designed to detect hate
                        speech directed specifically at Indians in textual data. The system incorporates natural language processing (NLP)
                        techniques tailored to the unique characteristics of Indian-directed hate, such as cultural insults, nationality-based
                        slurs, geopolitical abuse, and code-mixed language (e.g., Hindi–English or regional vernacular expressions). The
                        project uses a curated dataset containing annotated examples of anti-Indian hate speech, addressing challenges
                        such as imbalanced distribution of hate vs. non-hate samples, noise in social media text, and contextual sensitivity.
                        Machine learning and deep learning models are trained and evaluated using comprehensive metrics—including
                        accuracy, precision, recall, and F1-score—to ensure reliable detection performance. This project contributes to
                        the development of automated moderation tools and fosters a deeper understanding of the linguistic patterns
                        associated with anti-Indian hate speech.

                        <br />
                        <br />
                        <span className='text-lg text-black font-weight-bold border-b-2 border-black pb-1 '>Keywords</span>
                        <br />
                        <span className='block pt-2'>
                        Indian Hate Speech, Anti-India Abuse, Machine Learning, Text Classification, Natural Language
                        Processing, Code-Mixing, Social Media Analysis, Online Safety, Deep Learning
                        </span>
                    </p>
                </div>
            </div>

        </div>
    )
}
