const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <footer class="footer-sm pt-4 px-3 pb-3">
      <div class="footer-inner-wrapper mx-auto">
        <div class="footer-bottom d-flex flex-column justify-content-between">
          <div>
            <p class="copyright mb-2 font-semi">
              Built by Sammy Mohamed &amp; designed by Alex Law
            </p>
          </div>
          <div>
            <p class="copyright mb-2">
              &copy; {currentYear} Sammy Mohamed | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
