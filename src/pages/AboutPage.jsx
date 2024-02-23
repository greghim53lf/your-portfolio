import aboutMe from '../assets/aboutMe.png'

const styles = {
    container: {
        display: 'flex'
    },
    image: {
        minWidth: '300px'
    }
}

export default function AboutPage(){
    return (
        <div className='page'>
        <div style={styles.container}>
                <img src={aboutMe} alt='a picture of me' style={styles.image}/>
                <div>
                    <h2>About Me</h2>
                    <p>Bringing modern technologies into the real world is my <span>DNA</span>. Worked on multiple startups and governmental projects to get the ideas into real-world mobile and web applications and developed successful Educational startups in Uzbekistan.</p>
                    <button><span>o</span>Download My Resume</button>
                </div>
        </div>
        </div>
    )
}