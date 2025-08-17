import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { ThemeProvider } from '@/theme';
import { Metadata } from 'next';



export const metadata: Metadata = {
  title: 'Quiz',
  description: "En quiz for bar-til-bar under fadderuken til Omega",
  formatDetection: {
    telephone: false,
    email: true,
    address: false,
    date: true,
  },
  openGraph: {
    title: 'Quiz',
    description: "En quiz for bar-til-bar under fadderuken til Omega",
    siteName: 'omega-quiz.linode.djupvik.dev',
  },
  robots: {
    index: true,
    follow: true,
  },
  applicationName: 'omega quiz',
  category: 'quiz',
  creator: 'Emil Djupvik',
  authors: {
    name: 'Emil Djupvik',
    url: 'https://www.djupvik.dev',
  },
  keywords: ["oppkjøring", "kjøreskole", "førerkort", "førerprøven", "lappen", "ledige timer", "oppkjøring ledige timer", "oppkjøringstimer"],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="nb">
    <body style={{ margin: 0 }}>
      <ThemeProvider>
        <AppRouterCacheProvider>
          {children}
        </AppRouterCacheProvider>
      </ThemeProvider>
      <ToastContainer />
    </body>
  </html>

}