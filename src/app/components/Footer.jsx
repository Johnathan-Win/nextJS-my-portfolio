const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* WHAT WE DO */}
        <div>
          <h3 className="text-blue-300 font-bold">WHAT WE DO</h3>
          <ul className="mt-2 space-y-1">
            <li>Brand Strategy</li>
            <li>Content Strategy</li>
            <li>Website Design</li>
            <li>SEO</li>
          </ul>
        </div>

        {/* ABOUT */}
        <div>
          <h3 className="text-blue-300 font-bold">ABOUT</h3>
          <ul className="mt-2 space-y-1">
            <li>Olya Black</li>
            <li>Wix Studio</li>
            <li>Case Studies</li>
            <li>Insights</li>
          </ul>
        </div>

        {/* CONTACT US */}
        <div>
          <h3 className="text-blue-300 font-bold">CONTACT US</h3>
          <ul className="mt-2 space-y-1">
            <li><a href="https://www.facebook.com/por.thanathon.th" target="_blank"><i className="bi bi-facebook"></i> Facebook</a></li>
            <li> <i className="bi bi-envelope"></i> por.thanathon.th@gmail.com</li>
            <li><i className="bi bi-telephone"></i> +66809477422</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-sm">
        <p>Privacy Policy</p>
        <p>© 2025 All Rights Reserved. Thanathon.</p>
        <p>Website Created with Thanathon.</p>
      </div>
    </footer>
  );
};

export default Footer;
