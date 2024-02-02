import { Template, ImageCard } from '@/components'

export default function GalleryPage() {
    return (
        <Template>
            <section className="grid grid-cols-3 gap-8">
                <ImageCard name='Hubble' uploadDate='01/02/2024' src="https://science.nasa.gov/wp-content/uploads/2023/04/27946391011_d40ff10573_h-jpg.webp"/>
                <ImageCard />
                <ImageCard />
            </section>
        </Template>
    )
}