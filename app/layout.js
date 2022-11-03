import '../styles/globals.css'
import { Navigation } from "./components/Navigation";
import { font, font2 } from './fonts';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Hello World!</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${font.variable} ${font2.variable}`}>
        <Navigation />
        {children}</body>
    </html >
  );
}