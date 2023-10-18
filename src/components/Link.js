export default function Link (linkObject) {
   const { id, platform, url } = linkObject.link

  return (
    <div className="link-item-div">
      <a href={url} target="_blank" rel="noopener norefferer" >
        <button><p>{platform}</p></button>
      </a>
    </div>
  )  
};