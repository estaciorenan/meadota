import { useRouter } from "next/router";
import Link from "next/link";

export default function Categoria() {
    const router = useRouter();

    function enviarHome() {
        router.push('/')
    }

    return (
        <>
            <div>Categoria - {router.query.categoria} - {router.query.id}
                <ul>
                    <li>
                        <Link href="/produtos/cosmeticos?id=123">
                            Cosmeticos
                        </Link>
                    </li>
                    <li>
                        <Link href="/produtos/doces">
                            Doces
                        </Link>
                    </li>
                    <li>
                        <div onClick={enviarHome}>
                            Volta
                        </div>
                    </li>
                </ul>
            </div>
        </>

    )
}