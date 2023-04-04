import Link from "next/link";

export default function Footer(){

return(
<footer class="p-4 bg-turquoise-400 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-white-800">
    <ul class="flex flex-wrap items-center mt-3 sm:mt-0">
        <li>
            <Link href="/about" class="mr-4 text-sm text-white-500 hover:underline md:mr-6 dark:text-white-400">About</Link>
        </li>
        <li>
            <Link href="/privacyPolicy" class="mr-4 text-sm text-white-500 hover:underline md:mr-6 dark:text-white-400">Privacy Policy</Link>
        </li>
        <li>
            <Link href="/licensing" class="mr-4 text-sm text-white-500 hover:underline md:mr-6 dark:text-white-400">Licensing</Link>
        </li>
        <li>
            <Link href="/contact" class="text-sm text-white-500 hover:underline dark:text-white-400">Contact</Link>
        </li>
    </ul>
</footer>
)

}