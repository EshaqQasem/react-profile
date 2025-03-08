
# Open Sources Profile

#  React Profile

This project is a **React-based portfolio profile** showcasing various sections like **Home**, **About Me**, **Blog**, **Skills**, **Projects**, **Testimonials**, and more. It is built using **Next.js**, **TypeScript**, and **Tailwind CSS** to provide a fast, optimized, and responsive web experience.

Screenshots
Here are some screenshots showcasing the design of the profile:

<table>
  <tr>
    <td><img src="https://github.com/user-attachments/assets/9ffb5d9e-238d-46b5-ba1a-6ef3943bfa63" alt="Home Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/76267968-d73a-4f8e-93aa-7b7c3778e601" alt="About Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
    <td><img src="https://github.com/user-attachments/assets/99d3986b-6549-48f1-8fc8-e654a7e8f642" alt="Blog Page" style="width: 100%; height: auto; border-radius: 8px;"/></td>
  </tr>
</table>

## Project Structure

The project is structured in a modular way, ensuring scalability and easy maintainability. Here’s a brief overview of the important files and folders:

```
yacoubal-hardari-react-profile/
│
├── app/                      # Main application files (pages, layout, etc.)
│   ├── client.tsx            # Client-side rendering entry point
│   ├── globals.css           # Global styles
│   ├── hero-section.tsx      # Hero section component
│   ├── layout.tsx            # Layout component
│   ├── page.tsx              # Main landing page
│   ├── about/                # About page components
│   │   └── page.tsx
│   └── blog/                 # Blog page components
│       ├── loading.tsx       # Loading state for blog posts
│       └── page.tsx          # Blog page content
│
├── components/               # Reusable components
│   ├── about-me-section.tsx  # About Me section
│   ├── animated-background.tsx  # Animated background component
│   ├── blog-card.tsx         # Blog card component
│   ├── footer.tsx            # Footer component
│   ├── navbar.tsx            # Navigation bar component
│   └── ui/                   # UI components (buttons, inputs, cards, etc.)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dropdown-menu.tsx
│       └── progress.tsx
│
├── lib/                      # Utility functions
│   └── utils.ts              # Helper functions
│
├── public/                   # Public static files (images, etc.)
│   └── imags/                # Blog images
│       ├── 1.webp
│       ├── 5.webp
│       └── 7.webp
│
├── package.json              # Project dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration (JS)
├── tailwind.config.ts        # Tailwind CSS configuration (TS)
├── tsconfig.json             # TypeScript configuration
├── next.config.ts            # Next.js configuration
├── postcss.config.mjs        # PostCSS configuration
├── eslint.config.mjs         # ESLint configuration
└── components.json           # Component list (used for documentation)
```

## Getting Started

To get started with this project, follow the steps below:

### 1. Clone the repository

Clone the repository to your local machine:

```bash
git clone https://github.com/YacoubAl-hardari/react-profile.git
cd react-profile
```

### 2. Install dependencies

Make sure **Node.js** is installed on your system. Then, install the project dependencies using one of the following commands:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

### 3. Run the development server

Start the development server with the following command:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Now, open your browser and navigate to [http://localhost:3000](http://localhost:3000) to see the application running.

### 4. Start editing the pages

To begin modifying the application, you can edit the following files:

- **Home Page**: `app/page.tsx`
- **About Me Page**: `app/about/page.tsx`
- **Blog Page**: `app/blog/page.tsx`

Changes to these pages will be automatically reflected when you save the files.

---

## Pages Overview

### **Home Page**

The Home page is the entry point of your profile, featuring a welcome message, a brief introduction, and links to other sections like About Me and Blog.

### **About Me Page**

The About Me page showcases personal information, including your background, skills, experiences, and career highlights.

### **Blog Page**

The Blog page lists all blog posts and articles, with each post linked to a detailed view.

---

## Technologies Used

This project is built using the following technologies:

- **Next.js**: React framework for building static and server-rendered web applications.
- **TypeScript**: A statically typed superset of JavaScript that provides type safety.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **PostCSS**: For processing the CSS with plugins.
- **ESLint**: A tool for identifying and fixing problems in JavaScript/TypeScript code.

---

## Learn More

To learn more about **Next.js**, check out these resources:

- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and APIs.
- [Learn Next.js](https://nextjs.org/learn) - Interactive tutorial for building Next.js applications.

For more information about **Tailwind CSS**, check out the [official documentation](https://tailwindcss.com/docs).

---

## Deploy on Vercel

Deploy your Next.js app to production on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

For more details, refer to the [Next.js Deployment Documentation](https://nextjs.org/docs/app/building-your-application/deploying).

Feel free to modify the content, layout, and styles to suit your personal preferences or project requirements!
