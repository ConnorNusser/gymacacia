import Link from 'next/link'
import { UserAuth } from '@/context/authcontext';
import DropDown from './dropdown';
import Button from '@mui/material/Button';
import WorkspacesIcon from '@mui/icons-material/Workspaces';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ApiIcon from '@mui/icons-material/Api';
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
      <h4><ApiIcon></ApiIcon>Acacia</h4>
      </div>
      <Link href="/" passHref>
        <Button color="secondary"  endIcon={<DashboardIcon/>}>
          Home
        </Button>
      </Link>
      <Link href="/howitworks" passHref>
        <Button color="secondary" endIcon={<WorkspacesIcon/>}>
            How it Works
          </Button>
      </Link>
      <Link href={profilestr} passHref>
        <Button color="secondary">
            Profile
          </Button>
      </Link>
      <div>
      { user == '' || user == null ? <Link href="/signin/home">SignIn</Link> : <DropDown displayName={user?.displayName} /> }
      </div>
    </nav>
  );
}

export default Navbar;