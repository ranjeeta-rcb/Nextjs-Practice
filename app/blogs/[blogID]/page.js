 
export default async function Blog1({params}) {
 
    const {blogID} =  await params;
  return (
    <div> Blog <b>{blogID}</b> </div>
  )
}

 