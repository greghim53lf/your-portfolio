export default function Testimonial({imgSrc, name, jobTitle, comment}){
    return(<div>
        <img src={imgSrc} alt='client'/>
        <h3>{name}</h3>
        <small>{jobTitle}</small>
        <p>{comment}</p>
        <a>Learn More <span>-</span></a>
    </div>)
}