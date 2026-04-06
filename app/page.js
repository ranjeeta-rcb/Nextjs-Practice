 
import Link from "next/link";
import Image from "next/image";
import style1 from "../styles/home.module.css";

export default async function Home({searchParams, params}) {
  console.log(await searchParams);
  console.log(await params);
  console.log("Running.....")
  return (
    <div className="container">
    <h1>Welcome to Home Page</h1>
    <br/>
    <p>

      <Link href="/blogs"> Blogs  </Link>
     </p>
     <p>
    <Link href="/about">About</Link> {" "}
    </p>
    <p>
    <Link href="/services">Services</Link>
    </p>
    </div>
  );
}
