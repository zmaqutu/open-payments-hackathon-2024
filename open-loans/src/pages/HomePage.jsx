import SideNav from "../components/SideNav/SideNav";
import "./pages.css";

const HomePage = () => {
  return (
    <div className="home">
      <SideNav />
      
      <div className="view">
        <h1>Welcome to the Home Page</h1>
        <p>This is the default home page for your website.</p>
      </div>
    </div>
  );
};

export default HomePage;
