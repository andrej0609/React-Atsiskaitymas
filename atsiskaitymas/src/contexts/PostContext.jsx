import { createContext, useState } from "react";
import { useEffect } from "react";
import Monkey from "../components/img/monkey.gif"

const PostContext = createContext();

const PostProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      setPosts(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <div className="loading">
      <img src={Monkey} alt="loading" />
    </div>
  }

  const addNewPost = async (newPost) => {
    const res = await fetch('http://localhost:5000/posts', {
      method: 'POST',
      body: JSON.stringify(newPost),
      headers: { 'Content-Type': 'application/json' }
    });
    const updatedData = await res.json();
    setPosts([...posts, updatedData]);
  }

  return (
    <PostContext.Provider
      value={{
        posts,
        addNewPost
      }}
    >
      {children}
    </PostContext.Provider>
  );
}

export { PostProvider };
export default PostContext;