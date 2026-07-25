import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import CreatePost from './assets/pages/createPost.jsx';
import Feed from './assets/pages/feed.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/Createpost" element={<CreatePost />} />
        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  );
};

export default App;