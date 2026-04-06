 import Link from 'next/link';
import styles from "../styles/blogs.css"
export default function Home() {
  return (
   
  <div className='container'>
     <h1>Technical Agency</h1>
    <h3>All Blogs</h3>
      <p>

      <Link href="/ ">Blog 1</Link>
     </p>
     <p>
<Link href="/ ">Blog 2</Link>
     </p>
     
      <p>
 <Link href="/ ">Blog 3</Link>
     </p>
 
     </div>
   
  )
}
