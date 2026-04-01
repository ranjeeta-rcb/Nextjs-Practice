 
export default async function Comment({params}) {
 
    const paramsObj =  await params;
    const {blogID,commentID} = paramsObj;
    console.log(paramsObj);
  return (
    <div> Comment No. <i>{commentID}</i> on {blogID} page</div>
  )
}

 