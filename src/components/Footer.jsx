import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-16 bg-neutral-900 text-white px-16 pt-12 pb-2 divide-y-2 divide-red-900">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 mb-6">
        <div>
          <h2 className="text-xl font-bold mb-8">Best Chef</h2>
          <p>
            There are many variations of passages of Lorem Ipsum , but the
            majority have suffered alteration in some form.
          </p>
          <div className="flex mt-4">
            <p className="mr-2">
              <FaFacebook size={24} />
            </p>
            <p className="mr-2">
              <FaTwitter size={24} />
            </p>
            <p className="mr-2">
              <FaInstagram size={24} />
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Company</h2>
          <p className="mb-3">About Us</p>
          <p className="mb-3">Work</p>
          <p className="mb-3">Latest News</p>
          <p>Careers</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Product</h2>
          <p className="mb-3">Prototype</p>
          <p className="mb-3">Plan & Pricing</p>
          <p className="mb-3">Customers</p>
          <p>Integrations</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Support</h2>
          <p className="mb-3">Help Desk</p>
          <p className="mb-3">Become a Partner</p>
          <p className="mb-3">Customers</p>
          <p>Developers</p>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-6">Contact</h2>
          <p className="mb-3">524 Broadway , NYC</p>
          <p className="mb-3">+1 777 - 978 - 5570</p>
        </div>
      </div>
      <div className="flex justify-between pt-2">
        <p>@2026 Best Chef. All Rights Reserved</p>
        <p>
          Powered by: <strong>Chef Town</strong>
        </p>
      </div>
    </div>
  );
};

export default Footer;
