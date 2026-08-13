import Navbar from "@/Components/Navbar/Navbar";

const MailLayout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>

      {children}
    </div>
  );
};

export default MailLayout;
