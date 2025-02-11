# Valentine's Day Website 💝

A fun, interactive Valentine's Day website built with Next.js and Framer Motion. Features a playful "proposal" page with an impossible-to-click "No" button and a beautiful photo gallery page for when my girlfriend inevitably clicks "yes".

https://valentine-six-lake.vercel.app/

![Valentine's Website Preview](https://github.com/rahilv99/valentine/blob/main/website_preview.png)

## Features

- 💘 Interactive landing page with animated hearts background
- 🎯 Playful "No" button that dodges mouse hover
- 🖼️ Beautiful masonry photo gallery
- 💫 Smooth animations using Framer Motion
- 📱 Fully responsive design
- 🎨 Gradient backgrounds and modern UI

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/rahilv99/valentine.git
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customization

### Changing Names
Edit `app/page.tsx` to change the names and messages:
```typescript
// Find and modify these lines
<h2>Hi Grace! Will you be my Valentine?</h2>
<p>From Rahil</p>
```

### Adding Your Photos
1. Create a `public/happy_pics` directory
2. Add your images (recommended size: 400x300px)
3. Update the image URLs in `app/yes/page.tsx`:
```typescript
const imageUrls = [
  "/happy_pics/IMG_01.jpg",
  "/happy_pics/IMG_02.jpg",
  // Add more images...
]
```

### Deploy Your Own! 
Visit [vercel](https://vercel.com) to deploy your own website! It's as simple as connecting your GitHub repository.

### Modifying Colors
The color scheme can be customized in the Tailwind classes within the components:
- Main gradient: `from-pink-400 to-gray-200`
- Buttons: `bg-pink-500`, `text-pink-500`
- Text colors: `text-pink-600`, `text-gray-800`

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React Hot Toast](https://react-hot-toast.com/)
- [React Masonry CSS](https://www.npmjs.com/package/react-masonry-css)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

Made with ❤️ for spreading love
