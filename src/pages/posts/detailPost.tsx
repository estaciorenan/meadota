import PostBody from "../../components/postBody/postBody";
import { useRouter } from "next/router";

export default function DetailPost() {
    const router = useRouter();
    const idSelected: string = String(router.query.id);
    return (
        <>
            <PostBody id={idSelected}  />
        </>
    )
}