 
export default async function Blog({params}) {
 
    const paramsObj =  await params;
    const {blogID} = paramsObj;
    console.log(paramsObj);
  return (
    <div> All Comments on {blogID} page</div>
  )
}

 