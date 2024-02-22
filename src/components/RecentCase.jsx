export default function RecentCase({imgSrc, text, technologies}){
    return(
        <div>
            <div>
                <img src={imgSrc} alt='company-logo'/>
                <p>
                    {text}
                </p>
                <div></div>
                <a href='#'>Explore Case Study<span>-</span></a>
            </div>
            <div>
                <img/>
            </div>
        </div>
    )
}