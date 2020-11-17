import NavBar from './NavBar';

export default {
    title: 'MessageApp/NavBar',
    component: NavBar,
};

export const NavBarSelectedSendMessages = () => (
    <NavBar selected={0} setSelected={() => {}}/>
);

export const NavBarSelectedViewMessages = () => (
    <NavBar selected={1} setSelected={() => {}}/>
);