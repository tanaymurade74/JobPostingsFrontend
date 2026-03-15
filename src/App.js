import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import JobsList from "./components/JobsList";
import JobDetails from "./components/JobDetails";
import AddJob from "./components/AddJob";
import { AddJobProvider } from "./context/AddJobContext";
import { JobListProvider } from "./context/JobListContext";
import { JobDetailProvider } from "./context/JobDetailContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Router>
      <ToastContainer
                  position="bottom-right"
                  autoClose={1000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover={false}
                  theme="light"
                />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/jobs"
          element={
            <JobListProvider>
              <JobsList />
            </JobListProvider>
          }
        />
        {/* <Route path = "/jobs" /> */}
        <Route path="/jobs/:jobId" element={
          <JobDetailProvider>
          <JobDetails />
          </JobDetailProvider>} />
        <Route
          path="/addJob"
          element={
            <AddJobProvider>
              <JobListProvider>
                <AddJob />
              </JobListProvider>
            </AddJobProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
