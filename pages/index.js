import Head from 'next/head'
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import Alert from '../components/alert';
import clsx from 'clsx';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="">
        <div class="container mx-auto py-44 grid gap-y-10">
          <p className="text-5xl mb-4">Hello, I'm Roy. I'm a UI Designer.</p>
          <p className="text-lg text-slate-500">
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
          <Alert>success</Alert>
        </div>
      </section>
      <section className="bg-blue-50">
        <div class="container mx-auto py-44">
          <h2 className="text-base uppercase font-medium tracking-widest mb-20">Blog</h2>
          <ul className="flex flex-col gap-y-20">
            {allPostsData.map(({ id, date, title }) => (
              <li className="flex flex-col" key={id}>
              <Link className="text-4xl" href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className="">
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}