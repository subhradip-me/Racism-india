import React from 'react'
import classifireImg from '../assets/classifire.png'

export default function ProblemStatement() {
    return (
        <div>
            {/*Problem Statement Header */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-start mb-16">
                    <h2 className="text-3xl sm:text-4xl font-light text-zinc-900 mb-4">
                        📕 Problem Statement
                    </h2>
                </div>
            </div>

            {/* problem Statement content*/}
            <div>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-start mb-16">
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            The exponential growth of social media platforms such as Twitter, YouTube, Facebook, and Instagram has transformed
                            digital communication in India and across the global Indian diaspora. While these platforms have facilitated widespread
                            connectivity and democratic participation, they have also amplified the spread of online hate speech specifically targeting
                            <span className='font-semibold text-zinc-800'> Indians, Indian communities</span>, and <span className='font-semibold text-zinc-800'>India-associated identities</span>. Anti-Indian hate speech—ranging from derogatory
                            remarks, slurs, xenophobic narratives, religious hostility, ethnic stereotypes, anti-national sentiments, and targeted online
                            harassment—poses significant threats to societal stability, national harmony, and individual well-being.
                        </p>
                    </div>

                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2'>Impact and Scope of Anti-Indian Hate Speech</h3>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            Anti-Indian hate speech contributes directly to:
                            <br />
                            <span className='font-semibold text-zinc-800'> Marginalization of Indian communities</span>, both within India and abroad.
                            <br />
                            <span className='font-semibold text-zinc-800'> Reinforcement of ethnic, religious, caste-based, and nationalistic prejudices</span>, often leading to polarization.
                            <br />
                            <span className='font-semibold text-zinc-800'> Psychological harm</span> to individuals, especially students, migrants, minorities, and targeted social groups.
                            <br />
                            <span className='font-semibold text-zinc-800'> Escalation into real-world violence</span>, where online hostility has translated into physical attacks, discrimination,
                            harassment, or communal tension.
                            <br />
                            <br />
                            The global nature of online communication means that anti-Indian hate can spread across borders, reaching millions
                            instantly, persisting indefinitely, and influencing real-world political discourse and societal attitudes.

                        </p>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2'>Limitations of Traditional Detection Methods</h3>
                        <p className='text-zinc-600 text-lg leading-relaxed'>Previous moderation systems for identifying hate speech—especially keyword-based filters and manual review—are
                            severely inadequate in detecting culturally nuanced anti-Indian hate:</p>
                        <br />
                        <h3 className='text-xl mb-2 from-neutral-50'>Contextual Misinterpretation</h3>

                        <div className="text-zinc-600 text-lg leading-relaxed">
                            <p>India-related hate often involves:</p>

                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Sarcasm (“Oh look, another ‘smart Indian engineer’”)
                                <br />
                                 Cultural references (e.g., Bollywood stereotypes)
                                <br />
                                 Political references
                                <br />
                                 Coded insults (“IT cell, bhakt, pajeet”)
                                <br />
                                 Memetic language
                                Keyword-based systems fail to interpret such context, producing high false positives and negatives.

                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Evasion Through Code-Mixing and Spelling Variants</h3>
                        <div className="text-zinc-600 text-lg leading-relaxed">
                            <p>Users frequently use:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                <span className='font-semibold text-zinc-800'> Hinglish</span> (Hindi-English code-mix)
                                <br />
                                <span className='font-semibold text-zinc-800'> Regional languages</span> (Tamil, Bengali, Telugu, Urdu, Marathi)
                                <br />
                                <span className='font-semibold text-zinc-800'> Transliterated scripts</span> (Devanagari → Roman)
                                <br />
                                Example: “choot*ya Indian,” “chutiya,” “ चुतिया,” “chu**ya,” all convey similar intent but appear as different forms
                                to naive filters.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Manual Moderation is Not Scalable</h3>
                        <div className="text-zinc-600 text-lg leading-relaxed">
                            <p>Given India's population scale and the massive volume of India-related discourse, it is impossible for human moderators
                            to:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Review contextual hate manually
                                <br />
                                 Keep pace with high-speed social media content
                                <br />
                                 Remain unbiased or consistent
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Challenges With Machine Learning Approaches (India-Specific)</h3>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            Even advanced ML-based systems face unique difficulties in identifying anti-Indian hate speech:
                            <br />
                        </p>
                        <h3 className='text-xl mb-2 from-neutral-50'>Dataset Limitations</h3>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Lack of large, annotated datasets focusing specifically on anti-Indian hate
                                <br />
                                 Scarcity of rationale-based annotations (why a sentence is hateful)
                                <br />
                                 Inconsistency in labeling across different cultural or political viewpoints
                                <br />
                                 Difficulty in capturing regional linguistic diversity

                            </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Code-Mixing and Linguistic Complexity</h3>
                        <div className='text-zinc-600 text-lg leading-relaxed'>
                            <p>Anti-Indian hate is expressed in:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 English (“Indian scammer”)
                                <br />
                                 Hinglish (“Indians are such desi cheaters”)
                                <br />
                                 Hindi (“भारतिय ोंसेनफ़रि करिा हूँ”)
                                <br />
                                 Urdu (“ترفن فالخ ےک ںویتراھب”) 
                                <br />
                                 Dialects and slang
                                Standard ML pipelines trained only on English data perform poorly under such complexity.
                            </div>
                        </div>
                        </div>
                    </div>                    
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Cultural and Socio-Political Sensitivity</h3>
                        <div className='text-zinc-600 text-lg leading-relaxed'>
                            <p>Statements about India or Indians often involve:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Caste references
                                <br />
                                 Religious terminology
                                <br />
                                 Ethno-political sentiments
                                <br />
                                 Geo-political tensions (e.g., India–Pakistan conflicts)
                                <br />
                                ML models must differentiate between legitimate political criticism and genuine hate, a notoriously challenging
                                task.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Rapidly Evolving Hate Vocabulary</h3>
                        <div className='text-zinc-600 text-lg leading-relaxed'>
                            <p>New slurs, memes, and coded terms emerge frequently:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 "Pajeet"
                                <br />
                                 "IT cell zombie"
                                <br />
                                 "Cow worshipper"
                                <br />
                                 Modified spellings (Ind!an, Ind1an, etc.)
                                <br />
                                Models require constant updating to remain effective.
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2'>Need for an Advanced Anti-Indian Hate Speech Detection System</h3>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            To overcome these limitations, a more sophisticated approach is required—one that integrates modern ML and NLP
                            capabilities with sensitivity to Indian linguistic and cultural contexts. The necessary advancements include:
                        </p>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Context-Aware Deep Learning Models</h3>
                        <div className='text-zinc-600 text-lg leading-relaxed'>
                            <p>Transformer-based models (BERT, mBERT, IndicBERT, MuRIL) must be used to:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Understand semantics
                                <br />
                                 Capture code-mixed patterns
                                <br />
                                 Interpret cultural references
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Comprehensive and Diverse Datasets</h3>
                        <div className='text-zinc-600 text-lg leading-relaxed'>
                            <p>Datasets must include:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Hinglish
                                <br />
                                 Regional languages
                                <br />
                                 Transliterated text
                                <br />
                                 Explicit and implicit anti-Indian hate
                                <br />
                                 Human rationales for annotation
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Robust Feature Extraction</h3>
                        <div className='text-zinc-600 text-lg leading-relaxed'>
                            <p>Use:</p>
                        <div className='pl-4'>
                            <div className="text-zinc-600 text-lg leading-relaxed">
                                 Subword embeddings
                                <br />
                                 Character-level modeling for misspellings
                                <br />
                                 Domain-adaptive pretraining (like HateBERT but for Indic languages)
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="text-start mb-16">
                        <h3 className='text-2xl mb-2 from-neutral-50'>Real-Time Scalability</h3>
                        <p className="text-zinc-600 text-lg leading-relaxed">
                            The system must process massive daily volumes of India-related content across multiple platforms.
                        </p>
                    </div>
                    <div className="w-full flex justify-center mb-16">
                        <img src={classifireImg} alt="Hate Speech Classification System Architecture" className="max-w-full h-auto" />
                    </div>                    
                </div>
            </div>
        </div>
    )
}
