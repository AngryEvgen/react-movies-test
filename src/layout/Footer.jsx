const YEAR = new Date().getFullYear();

function Footer() {
  return (
    <footer className='page-footer blue-grey darken-4'>
      <div className='footer-copyright'>
        <div className='container'>
          © {YEAR} Copyright Text
          <a className='grey-text text-lighten-4 right' href='#!'>
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
