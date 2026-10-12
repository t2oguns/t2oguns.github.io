import { Link, NavLink } from 'react-router-dom';
import { profile, navigation } from '../data/profile';
import ThemeToggle from './ThemeToggle';
export default function Navbar() { return <header className="site-header"><div className="container nav"><Link to="/" className="wordmark" aria-label={`${profile.name}, home`}>{profile.initials}<span className="brand-dot" /></Link><nav aria-label="Main navigation">{navigation.map(item => <NavLink key={item.path} to={item.path} end={item.path === '/'}>{item.label}</NavLink>)}</nav><ThemeToggle /></div></header>; }
