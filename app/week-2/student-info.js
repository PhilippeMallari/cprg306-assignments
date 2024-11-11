import Link from "next/link";

export default function StudentInfo() {
    return (
        <main>
            <h1>
                Philippe Mallari
            </h1>

            <Link href="https://github.com/PhilippeMallari">
                Click to be redirected to my github account.
            </Link>
        </main>
    )
}