import SearchCard from '@/components/cardSearch';
import Head from 'next/head'

const Main = () => {
  return (
    <>
      <Head>
        <title>Main | Acacia</title>
        <meta name="mainpage" content="search"/>
      </Head>
      <div>
        <SearchCard/>
      </div>
    </>
  );
}
 
export default Main;