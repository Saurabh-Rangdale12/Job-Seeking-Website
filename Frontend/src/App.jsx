import React, { useEffect, useContext } from 'react';
import './App.css';
import { Context } from './main';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import Home from './components/Home/Home';
import Jobs from './components/Job/Jobs';
import JobDetails from './components/Job/JobDetails';
import MyJobs from './components/Job/MyJobs';
import PostJobs from './components/Job/PostJob';
import Application from './components/Application/Application';
import MyApplication from './components/Application/MyApplication';
import NotFound from './components/Not Found/NotFound';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';


const App = () => {

  const { isAuthorized, setIsAuthorized, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(
          "https://job-seeking-website-seven.vercel.app/api/v1/user/me",
          { withCredentials: true, });
          console.log(response);
        setUser(response.data.user);
        setIsAuthorized(true);
      } catch (error) {
        console.log(error);
        setIsAuthorized(false);
      }
    };
    fetchUser();
  },[isAuthorized]);

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/job/getall" element={<Jobs />} />
          <Route path="job/:id" element={<JobDetails />} />
          <Route path="job/post" element={<PostJobs />} />
          <Route path="job/me" element={<MyJobs />} />
          <Route path="/application/:id" element={<Application />} />
          <Route path="application/me" element={<MyApplication />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Toaster />
      </Router>
    </>
  );
}

export default App;

