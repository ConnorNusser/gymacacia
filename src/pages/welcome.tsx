import SearchCard from '@/components/cardSearch';
import { UserAuth } from '@/context/authcontext';
import styles from '@/styles/welcome.module.css';
import Head from 'next/head'

const Welcome = () => {
  const {user} = UserAuth();
  return (
    <>
      <Head>
        <title>Welcome Page | Acacia</title>
        <meta name="mainpage" content="search"/>
      </Head>

    </>
  );
}
export default Welcome;