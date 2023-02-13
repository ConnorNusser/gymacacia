import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h5>Acacia</h5>
      </div>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/ninjas/">Profile</Link>
    </nav>
  );
}
 
export default Navbar;