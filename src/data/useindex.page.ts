import { useEffect, useState } from "react";
import { BlogPost } from "./interfaces/blogPostInterface";
import { ApiService } from "./services/apiService";

export default function index() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(()=>{
    ApiService.get('posts').then((r)=> setPosts(r.data))
  },[])

  return {
    posts,
  };
}
