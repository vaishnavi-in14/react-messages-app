import './NavItem.css';

const NavItem = ({buttonValue, selectedIndex, setSelectedIndex, index}) => {
    const classNames = `navItem ${selectedIndex === index ? 'selected' : undefined}`;

    return (
        <button className={classNames} onClick={() => {setSelectedIndex(index)}}>
            {buttonValue}
        </button>
    );
};

export default NavItem;