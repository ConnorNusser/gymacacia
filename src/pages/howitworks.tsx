import { UserAuth } from '@/context/authcontext';
import Head from 'next/head'

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
        <a href="/" className="btn btn-primary">Go Home</a>
        <hr></hr>
        <p className="card-text">To Create Automated Content</p>
        <a href={`${profilestr}`}  className="btn btn-primary">Go Profile</a>
        </div>
        </div>
    </>
  );
}
 
export default HowItWorks;