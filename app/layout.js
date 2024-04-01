import { Salsa } from "next/font/google";
import { Spectral } from "next/font/google";
import "/app/globals.css";
import "/app/normalize.css";
import "leaflet/dist/leaflet.css";

const salsa = Salsa({ subsets: ["latin"], weight: '400' });
const spectral = Spectral({ subsets: ["latin"], weight: '400' });

export const title = "Zikos - Festival"

export const metadata = {
  title: title,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={salsa.className}>{children}</body>
    </html>
  );
}
