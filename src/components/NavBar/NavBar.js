import NavItem from '../NavItem/NavItem';

const NavBar = ({selected, setSelected}) => {
const buttons = ['Send Messages', 'View Messages'];
return (
    <nav>
        {buttons.map((buttonValue, index) => {
            return (
                <NavItem 
                buttonValue={buttonValue}
                index={index}
                selectedIndex={selected}
                setSelectedIndex={setSelected}
                />
            );
        })} 
    </nav>
    );
};

export default NavBar;