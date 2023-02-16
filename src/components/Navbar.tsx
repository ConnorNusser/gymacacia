import Link from 'next/link'
import Image from 'next/image'
import GoogleButton from 'react-google-button';
import { UserAuth } from '@/context/authcontext';
import DropDown from './dropdown';


const Navbar = () => {
  const { user, logOut} = UserAuth();
  const profilestr = user? `/profile/${user.displayName}`: `/signin/home`;
  const handleSignOut = async () => {
    try{
      await logOut();
    }catch (error) {
      console.log(error);
    }
  }
  return (
    <nav>
      <div className="logo">
        <h5>Acacia</h5>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href={profilestr}>Profile</Link>
      <div>
      { user == '' || user == null ? <Link href="/signin/home">SignIn</Link> : <DropDown displayName={user?.displayName} /> }
      </div>
    </nav>
  );
}

export default Navbar;