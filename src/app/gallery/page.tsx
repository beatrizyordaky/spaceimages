'use client'

import { Template, ImageCard } from '@/components'
import { Image } from '@/resources/image/image.resource';
import { useImageService } from '@/resources/image/image.service'
import { useState } from 'react';

export default function GalleryPage() {

    const useService = useImageService();
    const [images, setImages] = useState<Image[]>([])

    async function searchImages() {
        const result = await useService.search();
        setImages(result);
        console.table(result)
    }

    return (
        <Template>
            <button className='bg-gray-500' onClick={searchImages}></button>
            <section className="grid grid-cols-3 gap-8">
            
                <ImageCard name='{imageName}' uploadDate='01/02/2024' src=""/>

            </section>
        </Template>
    )
}