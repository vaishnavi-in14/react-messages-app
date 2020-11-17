import NavItem from './NavItem';

export default {
    title: 'MessageApp/NavItem',
    component: NavItem,
};

export const NavItemSelected = () => (
    <NavItem buttonValue={'Send Message'} index={0} selectedIndex={0} setSelectedIndex={() => {}}/>
);

export const NavItemUnSelected = () => (
    <NavItem buttonValue={'Send Message'} index={0} selectedIndex={1} setSelectedIndex={() => {}}/>
);