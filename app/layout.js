import { Inter } from "next/font/google";
import "/app/globals.css";
import "/app/normalize.css";

const inter = Inter({ subsets: ["latin"] });

export const title = "Zikos - Festival"

export const metadata = {
  title: title,
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
