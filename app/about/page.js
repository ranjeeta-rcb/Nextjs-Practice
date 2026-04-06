import Link from "next/link"; 
import styles from  "../styles/Home.module.css"; 
export default function About() {
  return (
    <div className="container">
     <h1>About page</h1>
     <p>Hey I'm Ranjeeta</p>
     <Link href="/">Home</Link>
     
     </div>
  )
}
