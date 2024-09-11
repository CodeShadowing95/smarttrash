import { Provider } from '@/components';
import '@/styles/globals.css';

export const metadata = {
  title: 'SmartTrash | Admin',
  description: "Interface d'adminstration du portail index",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/assets/logo.png" />
      </head>
      <body>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}

export default RootLayout