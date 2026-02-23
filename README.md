# Hariharan Babu - Portfolio

A modern React portfolio website built with Vite, React, and Tailwind CSS.

## Features

- Dark theme inspired by Graphical Jerry Design
- Multi-language hero section with rotating text
- Responsive design
- Smooth animations and transitions
- Sections: Hero, About, Experience, Projects, Skills, Education, Contact

### Enhanced Animations

The Experience and Projects sections now feature enhanced animations powered by Framer Motion:

- **Stagger Effects**: Cards animate in sequence with cascading delays
- **3D Hover Animations**: Cards lift and scale on hover with enhanced shadows
- **Typing Animation Effect**: Code blocks appear with a typing-like stagger animation
- **Interactive Technology Tags**: Technology tags scale and change color on hover
- **Icon Animations**: GitHub and external link icons rotate and scale on hover
- **Smooth Transitions**: All animations use easing curves for natural movement

### Resume Download

The "Get Resume" button in the Hero section now allows users to download the resume PDF file directly. The resume is served from the public folder and triggers a browser download when clicked.

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- Framer Motion (for animations)
- Lucide React (for icons)

## Getting Started

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Project Structure

```
├── public/
│   └── Final Resume_Hariharan_Babu_MS.pdf  # Resume file for download
├── src/
│   ├── sections/         # Page sections (Hero, Experience, Projects, etc.)
│   ├── components/       # Reusable components
│   ├── data/            # Portfolio data
│   └── context/         # Theme context
└── ...
```
