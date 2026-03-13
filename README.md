# Blog 📝
A modern, fast, and responsive personal tech blog built with Next.js, Tailwind CSS, and MDX, deployed on Vercel.

[![Live Site](https://img.shields.io/badge/Live%20Site-Visit-blue?style=for-the-badge&logo=vercel)](https://blog-beta-ten-96.vercel.app/)
[![GitHub Stars](https://img.shields.io/github/stars/gautamrajput139/byteinsights-blog?style=for-the-badge)](https://github.com/gautamsingh139/byteinsights-blog)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Tech Stack](https://img.shields.io/badge/Stack-Next.js%20%7C%20Tailwind%20%7C%20MDX-purple?style=for-the-badge)](https://github.com/gautamsingh139/byteinsights-blog)

---

## 🌟 Project Overview
ByteInsights is a personal blog focused on sharing technical tutorials, development best practices, and insights into modern web technologies. Designed with performance and user experience in mind, it features:
- Blazing-fast load times with Next.js App Router and Vercel Edge Network
- Seamless dark/light mode toggle
- Tag-based content navigation for easy discovery
- SEO-optimized pages with structured data
- Responsive design for all device sizes
- Interactive comment system powered by Giscus

### 🎨 Screenshot
![ByteInsights Blog Screenshot](https://i.imgur.com/your-screenshot-link.png)
*Homepage of ByteInsights Blog showing latest posts and dark mode*

---

## 🛠️ Tech Stack
| Category               | Tools                                                                 |
|------------------------|-----------------------------------------------------------------------|
| Frontend Framework     | [Next.js 13+ (App Router)](https://nextjs.org/)                       |
| Styling                | [Tailwind CSS v3](https://tailwindcss.com/)                           |
| Content Management     | [MDX](https://mdxjs.com/) + [Contentlayer](https://www.contentlayer.dev/) |
| Deployment             | [Vercel](https://vercel.com/)                                         |
| Code Quality           | [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/)      |
| CI/CD                  | [GitHub Actions](https://github.com/features/actions)                 |
| Comments               | [Giscus](https://giscus.app/)                                         |

---

## 🚀 Getting Started
Follow these steps to run the blog locally on your machine:

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Local Setup
1. **Clone the Repository**
   ```bash
   git clone https://github.com/gautamrajput139/byteinsights-blog.git
   cd byteinsights-blog
   ```

2. **Install Dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run Development Server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the blog.

### Adding New Posts
1. Create a new MDX file in `content/posts/`
2. Add frontmatter at the top of the file with post details:
   ```mdx
   ---
   title: "Your Post Title"
   date: "2026-05-213"
   tags: ["nextjs", "tailwindcss", "webdev"]
   excerpt: "A brief summary of your post"
   ---
   ```
3. Write your post content using MDX syntax (supports React components!)
4. Save the file—changes will auto-reflect in the dev server.

---

## 🚢 Deployment
ByteInsights Blog is automatically deployed to Vercel on every push to the `main` branch. To deploy your own instance:

1. **Fork the Repository**
2. **Connect to Vercel**
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New Project" and select your forked repository
   - Vercel will auto-detect the Next.js project and configure settings
3. **Environment Variables (Optional)**
   - If using Giscus comments or analytics, add the required environment variables in Vercel:
     ```
     NEXT_PUBLIC_GISCUS_REPO=gautamrajput139/byteinsights-blog
     NEXT_PUBLIC_GISCUS_REPO_ID=your-repo-id
     NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
     NEXT_PUBLIC_GISCUS_CATEGORY_ID=your-category-id
     ```
4. **Deploy**
   - Click "Deploy"—your blog will be live in minutes!

---

## 🤝 Contributing
Contributions are welcome! Whether you want to report a bug, suggest a feature, or submit a guest post, follow these guidelines:

1. **Report Bugs/Request Features**: Open an issue with a clear description and steps to reproduce (for bugs).
2. **Submit PRs**: Fork the repo, create a feature branch, and submit a PR with a detailed explanation of your changes.
3. **Guest Posts**: Reach out via GitHub Issues to propose a guest post topic—we'd love to feature your insights!

Please read our [Contributing Guidelines](CONTRIBUTING.md) for more details.

---

## 📄 License
This project is licensed under the MIT License—see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments
- Thanks to the Next.js and Tailwind CSS teams for their amazing frameworks.
- Shoutout to Contentlayer for simplifying MDX content management.
- Special thanks to Vercel for free, fast deployment for personal projects.

---

### Customization Notes
Replace placeholders (e.g., `gautamrajput139`, screenshot links, environment variables) with your actual project details to make this README fully tailored to your blog. Add a `CONTRIBUTING.md` file if you want to formalize contribution guidelines further.
