import Link from "next/link";

 

export default function About() {
  return (
     <>
     <h1>All Services</h1>
     
      <p>

      <Link href="/services/web-dev">Web Development</Link>
     </p>
     <p>
<Link href="/services/app-dev">App Development</Link>
     </p>
     
      <p>
 <Link href="/services/app-web">App/Web Design</Link>
     </p>
      <p>
  <Link href="/services/seo">SEO</Link>
     </p>
     
  
     </>
  )
}
