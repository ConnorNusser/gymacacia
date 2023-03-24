import { UserAuth } from '@/context/authcontext';
import Head from 'next/head'
import Link from 'next/link';
import { Button } from 'react-bootstrap';

const HowItWorks = () => {
  const {user} = UserAuth();
  const profilestr = user? `/profile/${user.displayName}`: `/signin/home`;
  return (
    <>
      <Head>
        <title>How it Works</title>
      </Head>
        <div className="card">
        <div className="card-header">
        Getting Started
        </div>
        <div className="card-body">
        <h5 className="card-title">Acacia can create Automated or Manual Content Uploads for your business</h5>
        <p className="card-text">To Create Manual Content</p>
        <Link href="/" passHref><Button variant="secondary">Go Home</Button></Link>
        <hr></hr>
        <p className="card-text">To Create Automated Content</p>
        <Link href={profilestr} passHref><Button variant="secondary">Go Profile</Button></Link>
        </div>
        </div>
    </>
  );
}
 
export default HowItWorks;