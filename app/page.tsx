import Hero from '../components/Hero'
import ServicesGrid from '../components/ServicesGrid'
import Steps from '../components/Steps'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import BeforeAfterSlider from '../components/BeforeAfterSlider'
import StickyCTA from '../components/StickyCTA'
import WhatsAppFloat from '../components/WhatsAppFloat'
import { JsonLd } from './JsonLd'
import CarouselAdvanced from '../components/CarouselAdvanced'
import BrandsFilter from '../components/BrandsFilter'


export default function Home(){
return (
<>
<JsonLd />
<Hero />
<ServicesGrid />
<Steps />
<BeforeAfterSlider />
<Testimonials />
<FAQ />
<StickyCTA />
<WhatsAppFloat />
<CarouselAdvanced />
<BrandsFilter />
</>
)
}