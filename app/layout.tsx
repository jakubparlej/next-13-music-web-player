import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <title>Next 13 Music Web Player</title>
        <meta name="description" content="Music web player app created using Next.js 13 version" />
        {/* TODO: Add music web player icon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
