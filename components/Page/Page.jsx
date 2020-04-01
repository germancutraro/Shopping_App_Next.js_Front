import Meta from '../Meta/Meta';
import Navbar from '../Navbar/Navbar';

const Page = ({ children }) => (
  <div>
    <Meta />
    <Navbar />
    {children}
  </div>
);
export default Page;
