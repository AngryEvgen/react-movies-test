function Header() {
  return (
    <header className='header'>
      <nav className='nav blue-grey darken-4'>
        <div className='nav-wrapper'>
          <a
            href='https://angryevgen.github.io/react-movies-test/'
            className='brand-logo'
          >
            React Movies
          </a>
          <ul id='nav-mobile' className='right hide-on-med-and-down'>
            <li>
              <a href='https://github.com/AngryEvgen'>GitHub</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
