const React = require('react');

function NavBar() {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='/quiz'>
          Викторина
        </a>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='/'>
                Home
              </a>
            </li>
            <li className='nav-item'>
              <a className='nav-link' href='/notes'>
                Notes
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
