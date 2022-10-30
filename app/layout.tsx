import AsideNavbar from '../components/AsideNavbar/AsideNavbar';
import TopNabar from '../components/TopNavbar/TopNabar';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Next 13 Music Web Player</title>
        <meta
          name='description'
          content='Music web player app created using Next.js 13 version'
        />
        {/* TODO: Add music web player icon */}
        <link rel='icon' href='/favicon.ico' />
        <meta name='viewport' content='width=device-width' />
      </head>
      <body>
        <TopNabar />
        <div className='grid grid-cols-[52px_1fr] gap-x-6 p-8 w-full'>
          <AsideNavbar />
          {children}
        </div>
      </body>
    </html>
  );
}
