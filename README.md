# Abdul Baqi Qureshi - Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS, showcasing the work and skills of Abdul Baqi Qureshi, a software engineer from Karachi, Pakistan.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations using Framer Motion
- **Responsive**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Toggle between dark and light themes
- **SEO Optimized**: Meta tags and Open Graph support for better search engine visibility
- **Contact Form**: Functional contact form with API integration
- **Dynamic Content**: Projects and personal data loaded from JSON files
- **TypeScript**: Fully typed for better development experience
- **Performance**: Optimized with Next.js for fast loading times

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── api/contact/          # Contact form API route
│   │   ├── about/                # About page
│   │   ├── awards/               # Awards & Certifications page
│   │   ├── contact/              # Contact page
│   │   ├── education/            # Education page
│   │   ├── experience/           # Experience page
│   │   ├── projects/             # Projects page
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout
│   │   └── page.tsx              # Home page
│   ├── components/
│   │   ├── Navigation.tsx        # Navigation component
│   │   └── Footer.tsx            # Footer component
│   └── data/
│       ├── personalData.json     # Personal information
│       └── projects.json         # Projects data
├── public/                       # Static assets
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdulbaqi02/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Personal Information

Edit `src/data/personalData.json` to update:
- Personal details (name, title, location, bio)
- Skills and technologies
- Experience, education, and certifications
- Social media links

### Projects

Edit `src/data/projects.json` to add or modify projects:
- Project title, description, and technologies
- GitHub and demo links
- Project images

### Styling

The project uses Tailwind CSS for styling. Main styles are in `src/app/globals.css`. Colors and themes can be customized in the Tailwind configuration.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint errors

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 📧 Contact Form

The contact form uses a Next.js API route (`/api/contact`). In production, you should integrate it with an email service like:

- **SendGrid**: For transactional emails
- **Mailgun**: Reliable email delivery
- **EmailJS**: Client-side email sending
- **Nodemailer**: Custom SMTP integration

To integrate with SendGrid, for example:

1. Install SendGrid SDK:
```bash
npm install @sendgrid/mail
```

2. Update the API route with your SendGrid API key and email configuration.

## 🎨 Design

The design features:
- Modern gradient backgrounds
- Smooth animations and transitions
- Professional typography with Geist font
- Consistent spacing and color scheme
- Mobile-first responsive design

## 📄 Pages

- **Home**: Hero section with introduction and skills overview
- **About**: Detailed personal information and technical skills
- **Projects**: Showcase of completed projects with links
- **Experience**: Professional experience and open-source contributions
- **Education**: Academic background and coursework
- **Awards**: Certifications and professional achievements
- **Contact**: Contact form and information

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing React framework
- [Tailwind CSS](https://tailwindcss.com) for utility-first CSS
- [Framer Motion](https://framer.com/motion) for smooth animations
- [Lucide](https://lucide.dev) for beautiful icons

---

Built with ❤️ by Abdul Baqi Qureshi
