import Testimonial from '../components/Testimonial'

export default function TestimonialsPage(){
    return (<div className='page'>
        <h2>Testimonials</h2>
        <p>I am a product-oriented Software Engineer with a business mindset from bringing the latest tech to launching successful startups!</p>
        <div>
            <Testimonial/>
            <a href='#'>All Testimonials</a>
        </div>
    </div>)
}