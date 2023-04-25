import styles from './postBody.module.css';
import Image from 'next/image';
import index from '@/src/data/useindex.page';
import { useEffect, useState } from 'react';
import { ApiService } from '@/src/data/services/apiService';
import { BlogPost } from '@/src/data/interfaces/blogPostInterface';

export default function PostBody({ id }: { id: string }) {
    const [dataList, setDataList] = useState([{
        title:'',
        picture:'',
        content:''
    }]);
    const { posts } = index();

    useEffect(() => {
        if (id) {
            reqDataList()
        }
    }, [id])

    async function reqDataList() {
        await ApiService.get('posts').then((r) => {
            setDataList((prev) => {
                return r.data.filter((f: { id: string; }) => f.id === id)
            })
            console.log(dataList)
        })
    }

    return (
        <>
            <div className={styles['post-container']}>

                <h2 className={styles['post-title']}>
                    {dataList[0].title}
                </h2>

                <Image
                    src={dataList[0].picture}
                    className={styles['post-picture']}
                    alt={dataList[0].title}
                    width={500}
                    height={200}
                />

                <div className={styles['post-content']}>
                    <p>
                        {dataList[0].content}
                    </p>
                </div>

            </div>
        </>
    )
}