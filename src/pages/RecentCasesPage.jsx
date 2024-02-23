import RecentCase from '../components/RecentCase'

export default function RecentCasesPage(){
    return(
        <div className='page'>
            <h2>Recent Cases</h2>
            <p>I am a product-oriented Software Engineer with a business mindset from bringing the latest tech to launching successful startups!</p>
            <RecentCase/>
            <div>
                <h2>Other cases</h2>
                <p>Explore more about other case studies and projects I have done!</p>
                <a>All Case Studies<span>-</span></a>
            </div>
        </div>
    )
}