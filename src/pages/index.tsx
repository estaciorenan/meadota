import Head from 'next/head'
import useIndex from '../data/useindex.page'
import PostList from '../components/postList/postList'

export default function Home() {

  const { posts } = useIndex();

  return (
    <div>
      <Head>
        <title>Meu Portfolio</title>
        <meta
          name='description'
          content='Portfolio de Estácio Renan'
        />
        <link rel="icon" href="" />
      </Head>
      <main>
        <PostList posts={posts}/>
      </main>
    </div>
  )
}
