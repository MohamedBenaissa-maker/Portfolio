# Mohamed Benaissa - Portfolio

Professional portfolio website showcasing my projects, skills, and experience as a Master's IDTW student in Informatique at Université de Sétif 1.

## Features

- 🎨 Modern and professional UI design
- 📱 Fully responsive layout
- 🚀 Fast loading with Next.js
- 🎯 Web 3D projects section for hosting interactive projects
- ✨ Smooth scrolling navigation
- 🌈 Beautiful gradient effects

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: CSS3 with custom properties
- **3D Graphics**: Three.js (ready for integration)
- **Animation**: Framer Motion
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment to Vercel

1. Push your code to GitHub/GitLab/Bitbucket

2. Import your repository to Vercel:
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. Deploy! Your portfolio will be live in minutes.

Alternatively, use the Vercel CLI:
```bash
npm i -g vercel
vercel
```

## Project Structure

```
Portfolio/
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Navigation bar
│   ├── Profile.tsx    # Profile section
│   ├── Education.tsx   # Education section
│   ├── Experience.tsx  # Experience section
│   ├── Projects.tsx   # Projects section
│   ├── Skills.tsx     # Skills section
│   └── Web3D.tsx      # Web 3D projects section
├── public/            # Static assets (add photo.jpg here)
└── package.json
```

## Adding Your Photo

1. Add your `photo.jpg` file to the `public/` directory
2. Update the `Profile.tsx` component to use the image (currently uses placeholder)

## Customization

- Update personal information in respective component files
- Modify colors in `app/globals.css` (CSS variables)
- Add more projects in `components/Projects.tsx`
- Customize the Web 3D section in `components/Web3D.tsx`

## License

This project is open source and available for personal use.

---

**Contact**: mohamedbenaissa735@gmail.com | +213 0796352552

