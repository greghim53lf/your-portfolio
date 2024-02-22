export default function Education({imgSrc, schoolDetails, comment}) {
  return (
    <div>
        <img src={imgSrc} alt='school-logo'/>
        <div>
            <h3>{schoolDetails.name}</h3>
            <small>{schoolDetails.degree}</small>
            <span>{schoolDetails.duration}</span>
        </div>
        <p>{comment}</p>
        <a>Learn More <span>-</span></a>
    </div>
  )
}
