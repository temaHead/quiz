const React = require('react');

function NavBar() {
  return (
    <nav className='navbar navbar-dark navbar-expand-lg bg-primary'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Quiz
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon' />
        </button>
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
