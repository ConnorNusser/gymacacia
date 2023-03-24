import SearchCard from '@/components/cardSearch';
import { UserAuth } from '@/context/authcontext';
import Head from 'next/head'

const Main = () => {
  const {user} = UserAuth();
  return (
    <>
      <Head>
        <title>Main | Acacia</title>
        <meta name="mainpage" content="search"/>
      </Head>
      <div>
        <SearchCard user={user}/>
      </div>
    </>
  );
}
 
export default Main;