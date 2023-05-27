import './globals.css'


export const metadata = {
  title: 'SGPA Calculator',
  description: 'Get your SGPA in a few clicks',
  metadata: [
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@sgpa_calculator' },
    { name: 'twitter:title', content: 'SGPA Calculator' },
    {
      name: 'twitter:description',
      content: 'Get your SGPA in a few clicks',
    },
    {
      name: 'twitter:image',
      content: 'https://sgpa-calculator.vercel.app/icon.png',
    },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: 'SGPA Calculator' },
    {
      property: 'og:description',
      content: 'Get your SGPA in a few clicks',
    },
    {
      property: 'og:image',
      content: 'https://sgpa-calculator.vercel.app/icon.png',
    },
    { property: 'og:url', content: 'https://sgpa-calculator.vercel.app' },
    { property: 'og:site_name', content: 'SGPA Calculator' },
  ],
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" />
      </head>
      <body>{children}</body>
    </html>
  )
}
