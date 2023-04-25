import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { BlogPost } from "@/src/data/interfaces/blogPostInterface";
import { getSession } from "next-auth/react"; 

const PostsApis = axios.create({
  baseURL: "http://localhost:3002/api/posts",
  headers: {
    "Content-Type": "application/json",
  },
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await getSession({req})

  if(!session && req.method !== 'GET'){
    res.status(401).send({error: 'Não autorizado'})
    return;
  }
  switch (req.method) {
    case "GET":
      return handleGet(req, res);
    case "POST":
      return handlePost(req, res);
    case "PUT":
      return handlePut(req, res);
    default:
      res.status(405).send({
        error: "metodo desconhecido.",
      });
  }
};

async function handleGet(req: NextApiRequest, res: NextApiResponse) {
  const posts = await PostsApis.get("/");
  res.status(200).json(posts.data);
}

async function handlePost(req: NextApiRequest, res: NextApiResponse) {
  const newPost = req.body as BlogPost;
  //   newPost.slug = newPost?.title.toLowerCase().replace(/\s/g, '-').replace(/[^\w-]+/g, '')
  const createPosts = await PostsApis.post("/", newPost);
  res.status(200).json(createPosts.data);
}

async function handlePut(req: NextApiRequest, res: NextApiResponse) {
  const newPost = req.body as BlogPost;
  await PostsApis.put("/" + newPost.id, newPost);
  res.status(200).end();
}
