const Footer = () => {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="qwe">
              <div className="footer-widget">
                <h2>Get in Touch</h2>
                <div className="contact-info">
                  <p><i className="fa fa-map-marker"></i>123 News Street, NY, USA</p>
                  <p><i className="fa fa-envelope"></i>
                    <a href="/">admin@admin.com</a></p>
                </div>
              </div>
            </div>
            <div className="qwe">
              <div className="footer-widget">
                <h2>Useful Links</h2>
                <ul>
                  <li><a href="/">About Us</a></li>
                  <li><a href="/">Latest Posts</a></li>
                  <li><a href="/">Privacy Policy</a></li>
                  <li><a href="/">Advertisement</a></li>
                  <li><a href="/">Contact Us</a></li>
                </ul>
              </div>
            </div>
            <div className="qwe">
              <div className="footer-widget">
                <h2>Newsletter</h2>
                <div className="newsletter-info">
                  <p>Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                </div>
                <form className="newsletter-form">
                  <input type="email" className="form-control" placeholder="Enter your email" name="EMAIL" required="" />
                  <button type="submit" className="btn"><i className="fa fa-paper-plane"></i></button>
                </form>
              </div>
            </div>
            <div className="qwe">
              <div className="footer-widget">
                <h2>Follow Us</h2>
                <div className="social">
                  <a href="/"><i className="fab fa-twitter"></i></a>
                  <a href="/"><i className="fab fa-facebook-f"></i></a>
                  <a href="/"><i className="fab fa-youtube"></i></a>
                  <a href="/"><i className="fab fa-instagram"></i></a>
                  <a href="/"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row">
              <div>
                <p>© 2023 All rights reserved.</p>
              </div>
              <div>
                <p>Designed by <a href="/">Andrejus</a></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;