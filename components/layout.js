import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import Link from 'next/link';

const name = 'Roy Quilor';
export const siteTitle = 'Next.js sample website';

export default function Layout({ children, home }) {
    return (
    <div>
        <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />    
        </Head>
        <header className="bg-slate-100">
        {home ? (
          <div className="container mx-auto py-6">
            <div className="flex items-center gap-x-4">
            <Image
              priority
              src="/images/profile.png"
              className="rounded-full mb-2"
              height={72}
              width={72}
              alt=""
            />
            <h1 class="text-base font-medium">{name}</h1>
            </div>
          </div>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.png"
                height={72}
                width={72}
                alt=""
              />
            </Link>
            <h2>
              <Link href="/">
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
    );
}

