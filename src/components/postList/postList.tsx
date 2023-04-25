import styles from './postList.module.css';
import { BlogPost } from '@/src/data/interfaces/blogPostInterface';
import Link from 'next/link';
import Image from 'next/image';

export default function PostList({ posts }: { posts: BlogPost[] }) {
    return (
        <ul className={styles['post-list']}>
            {
                posts.map(post => (
                    <PostListItem key={post.id} post={post} />
                ))
            }
        </ul>
    )
}

export function PostListItem({ post }: { post: BlogPost }) {



    return (
        <li className={styles['post-list-item']}>
            <Link href={`posts/detailPost?id=${post.id}`}>
                <Image src={post.picture}
                    alt={post.title}
                    className={styles['post-picture']} 
                    width={200}
                    height={150}
                    />
                <h2 className={styles['post-title']}>{post.title}</h2>
                <p>{post.description}</p>
            </Link>
        </li>
    );
}