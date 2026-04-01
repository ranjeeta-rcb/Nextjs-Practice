 
import Link from "next/link";
import Image from "next/image";

export default async function Home({searchParams, params}) {
  console.log(await searchParams);
  console.log(await params);
  console.log("Running.....")
  return (
    <>
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
    </>
  );
}
