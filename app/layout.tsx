import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Noto_Sans_KR, Noto_Serif_KR, Geist_Mono } from 'next/font/google'
import './globals.css'

const notoSansKR = Noto_Sans_KR({
  variable: '--font-noto-sans-kr',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})
const notoSerifKR = Noto_Serif_KR({
  variable: '--font-noto-serif-kr',
  subsets: ['latin'],
  weight: ['500', '700', '900'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://chicken-noodle-landing-page.vercel.app'),
  title: '현풍닭칼국수 강남역삼점 | 건강을 생각하는 닭칼국수 전문점',
  description:
    '강남역과 역삼역 사이 현풍닭칼국수 강남역삼점. 진한 닭육수 닭칼국수, 닭곰탕, 한방수육을 즐길 수 있는 닭칼국수 전문점입니다.',
  keywords: [
    '현풍닭칼국수 강남역삼점',
    '강남역 닭칼국수',
    '역삼역 칼국수',
    '강남역 칼국수',
    '강남 닭곰탕',
    '강남역 점심',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: '현풍닭칼국수 강남역삼점',
    description:
      '강남역과 역삼역 사이, 진한 닭육수로 끓여낸 닭칼국수 전문점.',
    url: '/',
    siteName: '현풍닭칼국수 강남역삼점',
    locale: 'ko_KR',
    type: 'website',
    images: [
      {
        url: '/images/hero-spread.png',
        width: 1200,
        height: 630,
        alt: '현풍닭칼국수 강남역삼점 대표 상차림',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '현풍닭칼국수 강남역삼점',
    description: '강남역과 역삼역 사이 닭칼국수 전문점.',
    images: ['/images/hero-spread.png'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="ko"
      className={`${notoSansKR.variable} ${notoSerifKR.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
