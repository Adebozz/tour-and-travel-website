import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>DoyseEdu</h1>
          <p>Choose your favourite destination</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square" />
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square" />
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
            <h4>Projects</h4>
            <a href="/">ChangeLog</a>
            <a href="/">Status</a>
            <a href="/">License</a>
            <a href="/">All Versions</a>
            <a href="/">Info</a>
        </div>
        <div>
            <h4>Community</h4>
            <a href="/">GithubIssues</a>
            <a href="/">Projects</a>
            <a href="/">Twitter</a>
            
        </div>
        <div>
            <h4>Help</h4>
            <a href="/">Support</a>
            <a href="/">Troubleshoot</a>
            <a href="/">Contact Us</a>
            
        </div>
        <div>
            <h4>Others</h4>
            <a href="/">Terms of servive</a>
            <a href="/">Privacy policy</a>
            <a href="/">License</a>
           
        </div>
      </div>
    </div>
  );
};

export default Footer;
