# 🌟 Shihara's Portfolio Website

A modern, responsive portfolio website built with React, Three.js, and Tailwind CSS showcasing the projects, skills, and achievements of Shihara Dewagedara - a Computer Engineering student at the University of Peradeniya.

![Portfolio Preview](https://readme-typing-svg.herokuapp.com?font=Fira+Code&size=30&duration=2000&pause=2000&color=F7E976&width=1500&lines=Computer+Engineering+Student+%7C%7C+University+of+Peradeniya)

## ✨ Features

- **Modern Design**: Clean, professional interface with stunning animations
- **3D Interactive Elements**: Three.js powered 3D models and animations
- **Responsive Layout**: Optimized for all device sizes (desktop, tablet, mobile)
- **Dark Theme**: Eye-friendly dark color scheme with purple accents
- **Interactive Components**:
  - Animated hero section with typing effect
  - Skills showcase with animated icons
  - Project gallery with hover effects
  - Contact form with email integration
  - Smooth scrolling navigation
- **Dynamic Content Sections**:
  - About Me
  - Education & University Courses
  - Skills & Technologies
  - Projects Portfolio
  - Achievements
  - Contact Information

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern JavaScript library for building user interfaces
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React

### 3D Graphics & Animations
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Helper components for react-three-fiber

### UI Components & Icons
- **React Icons** - Popular icon library
- **React Tilt** - Parallax tilt effect
- **React Vertical Timeline** - Timeline component
- **React Typed** - Typing animation effect

### Utilities & Services
- **EmailJS** - Email service for contact form
- **Axios** - HTTP client
- **SweetAlert2** - Beautiful popup alerts
- **Maath** - Math utilities for 3D graphics

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **gh-pages** - GitHub Pages deployment

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Shihara1020/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the portfolio

## 🛠️ Build and Deployment

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Deploy to GitHub Pages
```bash
npm run deploy
```

## 📁 Project Structure

```
├── public/
│   ├── logo.svg
│   ├── desktop_pc/          # 3D model assets
│   └── planet/              # 3D model assets
├── src/
│   ├── assets/              # Images, icons, and documents
│   ├── components/          # React components
│   │   ├── About.jsx
│   │   ├── Achievements.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Skills.jsx
│   │   ├── UniversityCourses.jsx
│   │   ├── Works.jsx
│   │   └── canvas/          # 3D canvas components
│   ├── constants/           # App constants and data
│   ├── hoc/                 # Higher-order components
│   ├── utils/               # Utility functions
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   ├── index.css            # Global styles
│   └── styles.js            # Tailwind style configurations
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in Tailwind CSS. Main colors include:
- Primary: `#915eff` (Purple)
- Secondary: `#F7E976` (Gold/Yellow)
- Background: Dark theme

### Content
Update the following files to customize the content:
- `src/constants/index.js` - Personal information, projects, skills, education
- `src/assets/` - Replace images with your own
- `src/assets/cv-template.pdf` - Replace with your CV

### Styling
- Modify `tailwind.config.js` for theme customization
- Update `src/styles.js` for component-specific styles
- Edit individual component files for layout changes

## 📧 Contact Form Setup

The contact form uses EmailJS for sending emails. To set it up:

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Set up your email service
3. Update the EmailJS configuration in the Contact component

## 🌐 Live Demo

Visit the live portfolio: [https://shihara1020.github.io/Portfolio/](https://shihara1020.github.io/Portfolio/)

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- 📱 Mobile devices (320px+)
- 📟 Tablets (768px+)
- 💻 Laptops (1024px+)
- 🖥️ Desktops (1280px+)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Shihara Dewagedara**
- 🎓 2nd Year Computer Science Engineer
- 🏫 University of Peradeniya
- 💼 [LinkedIn](https://www.linkedin.com/in/shihara-dewagedara-23109a275/)
- 🐱 [GitHub](https://github.com/Shihara1020)

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing libraries
- Special thanks to Three.js for 3D graphics capabilities
- Inspired by modern portfolio designs and best practices

---

⭐ Don't forget to give this project a star if you found it helpful!
