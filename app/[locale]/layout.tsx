import '../globals.css'
import { NextIntlClientProvider } from 'next-intl/client';
import { Permanent_Marker, Roboto } from 'next/font/google';
import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Revolte',
  description: 'Adventure game for Web3 onboarding',
  twitter: {
    card: 'revolte_equipment',
    title: 'Revolte.app',
    description: 'Adventure game for Web3 onboarding',
    site: 'https://revolte.app',
    creator: '@IrruptionLab',
    images: ['https://www.revolte.app/public/img/revolte_card.jpeg'],
  },
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'fr' }, { locale: 'es' }];
}

const perm_marker = Permanent_Marker({
  variable: '--font-perm-marker',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})

const roboto = Roboto({
  variable: '--font-roboto',
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
})



export default async function LocaleLayout({ children, params: { locale } }:
  {
    children: React.ReactNode
    params: { locale: string }
  }) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={`${perm_marker.variable} ${roboto.variable}`}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}