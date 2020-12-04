import React,{useState, useEffect} from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import BlogPosts from './components/BlogPosts'
import blogData from './data/post_data'
import BlogPost from './components/BlogPost'

const App = () => {
  const [blogPosts, setBlogPosts] = useState([])

  useEffect(() => {
    setBlogPosts(blogData)
  },[])
  
  return (
      <div>
        <BrowserRouter>
          <h1>Blog App</h1>
          <Route exact path="/" render={(props) => <BlogPosts {...props} postData={blogPosts} /> } />
        </BrowserRouter>
      </div>
  )
}
export default App