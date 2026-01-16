# Hate Speech Detection Against Indians - Research Demonstration

A research demonstration website showcasing a Bidirectional Long Short-Term Memory (BLSTM) based NLP model for detecting hate speech specifically targeted against Indians in online text.

## 🎓 About This Project

This is a **Research Demonstration Website** (not a production application) developed to showcase the capabilities of a BLSTM-based hate speech detection system. The project addresses the growing concern of anti-Indian sentiment in digital spaces using natural language processing techniques.

## 🔬 Research Focus

- **Model Architecture**: Bidirectional LSTM (BLSTM)
- **Dataset**: Jigsaw Toxic Comment Dataset (augmented with Indian-specific samples)
- **Capabilities**: 
  - Multi-label classification (Toxic, Obscene, Insult, Identity Hate, Threat)
  - Code-mixed text support (Hinglish)
  - Implicit hate detection
  - Context-aware sequence modeling

## 🌐 Website Structure

Single-page research demonstration with smooth scrolling:

1. **Hero Section** - Introduction and research overview
2. **Model Demonstration** - Interactive text analysis tool
3. **Catalogue** - Model architecture, dataset, and capabilities
4. **Research Overview** - Abstract, methodology, results, and limitations
5. **System Architecture** - Visual processing pipeline

## 🛠️ Tech Stack

- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 4.1.18
- **Animations**: GSAP 3.14.1
- **Smooth Scrolling**: Lenis 1.3.16
- **Language**: JavaScript (ES6+)

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd Racism-india

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Development

```bash
# Run development server with hot reload
npm run dev

# Lint code
npm run lint
```

The development server will start at `http://localhost:5173` (or next available port).

## 📁 Project Structure

```
src/
├── assets/          # Static assets (logo, images)
├── components/      # React components
│   ├── Architecture.jsx
│   ├── Catalogue.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Loader.jsx
│   ├── ModelDemo.jsx
│   ├── Navigation.jsx
│   └── Research.jsx
├── App.jsx         # Main application component
├── main.jsx        # Application entry point
└── index.css       # Global styles with Tailwind
```

## ⚠️ Important Notes

- **Research Use Only**: This is an academic demonstration website, not a production-ready application
- **Model Integration**: The demo currently uses mock data. Connect to your trained BLSTM model's API endpoint in `ModelDemo.jsx`
- **Academic Context**: Developed under academic supervision for research purposes

## 🎨 Design Philosophy

- Minimal UI with zero cognitive overload
- Academic tone and presentation
- Clear separation of sections
- Examiner-friendly navigation
- Smooth scroll-based interactions

## 📄 Research Paper

For detailed information about the methodology, results, and findings, refer to:
`Hate Speech Detection against Indians using BLSTM.pdf`

## 🔧 Configuration

### Tailwind CSS v4
The project uses Tailwind CSS v4 with the Vite plugin. Configuration is handled through the `@import "tailwindcss"` directive in `index.css`.

### Vite Configuration
See `vite.config.js` for build and development settings.

## 📝 License

This project is for academic and research purposes only.

## 👥 Contributors

Developed by [Your Name/Team]  
Department of Computer Science  
[Your University Name]  
2026

---

**Note**: This is a research demonstration website. For production deployment, additional security measures, error handling, and API integration would be required.
