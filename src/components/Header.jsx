const Header = ({title}) => {
    return (
        <header style = {{ padding: '10px', backgroundColor: 'green', color: 'white', textAlign: 'center'}}>
        <h1>{title}, Bitch!</h1>
        </header>
    )
};

export default Header;