import Link from 'next/link'
import Image from 'next/image'
import GoogleButton from 'react-google-button';

type NavBarTypes = {
  isLoggedIn: boolean;
  username: string;
}
const Navbar = (props: NavBarTypes) => {
  const { isLoggedIn, username} = props;
  return (
    <nav>
      <div className="logo">
        <h5>Acacia</h5>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas/">Profile</Link>
      <div>
      { username === '' ? <Link href="/pages/signin">Sign In</Link> : <WelcomeObject username ={username} /> }
      </div>

    </nav>
  );
}

interface wObjectInfo {
  username: string;
}
const WelcomeObject = (props: wObjectInfo) =>{
  return(
    <div>
      <h3>Signed in as {props.username}!</h3>
    </div>
  )
} 
 
export default Navbar;