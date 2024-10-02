import Image from "next/image";
import styles from "./page.module.css";
import detail from "@/pages/detail";
import Link from "next/link";


export default function Home() {
  return (
  <>
    <Link href="/detail">Detail</Link>
  </>
  );
}
