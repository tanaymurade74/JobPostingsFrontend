import { Link } from "react-router-dom";
import HeaderWithoutSearch from "../constants/HeaderWithoutSearch"; 
import Footer from "../constants/Footer";

const HomePage = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <HeaderWithoutSearch />

      <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center mb-5 mt-4">
        
        <div className="text-center bg-light p-5 rounded-4 shadow-sm w-100">
          <h1 className="display-4 fw-bold text-primary mb-3">
            Find Your Dream Job Today
          </h1>
          <p className="lead text-secondary mb-4">
            Connect with top companies and discover opportunities that match your skills. 
            Whether you are looking for remote work or an on-site position, your next big step starts here.
          </p>
          
          <div className="d-flex justify-content-center gap-3">
            <Link to="/jobs" className="btn btn-primary btn-lg px-4 shadow-sm">
              Browse Jobs
            </Link>
            <Link to="/addJob" className="btn btn-outline-dark btn-lg px-4 shadow-sm">
              Post a Job
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default HomePage;