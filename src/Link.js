export default function Link (linkObject) {
   const { id, platform, url } = linkObject.link
   console.log(id);
  return (
    <div className="link-item-div">
      <a href={url} target="_blank" rel="noopener norefferer" ><h1>{platform}</h1></a>
    </div>
  )  
};