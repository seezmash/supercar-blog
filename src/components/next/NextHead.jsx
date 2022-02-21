import Head from 'next/head'

export default function NextHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="viewport"
        content="initial-scale=1, width=device-width"
        key="viewport"
      />
      <link rel="icon" href="/favicon.png" key="favicon" />
    </Head>
  )
}
