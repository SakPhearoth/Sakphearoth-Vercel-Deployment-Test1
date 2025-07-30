
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next'
import ProductDetailPage from './ProductDetailPage'

export async function generateMetadata(
  // ✅ Let Next.js infer the correct type
  props: any
): Promise<Metadata> {

  const { params } = props

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}products/${params.id}`)
    if (!res.ok) {
      return { title: 'Product not found' }
    }

    const product = await res.json()

    return {
      title: product?.title ?? 'Product Detail',
      description: product?.description ?? '',
      openGraph: {
        title: product?.title,
        description: product?.description,
        images: [product?.thumbnail ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwCJYSnbBLMEGWKfSnWRGC_34iCCKkxePpg&s'],
      },
    }
  } catch {
    return {
      title: 'Product not found',
    }
  }
}


export default function page() {
  return (
    <ProductDetailPage />
  )
}




