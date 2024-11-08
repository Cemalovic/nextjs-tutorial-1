import Image from 'next/image'
import Link from 'next/link'
import drinkJpg from './drink.jpg'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch a drink ...')
  }

  return res.json()
}

const SingleDrinkPage = async ({ params }) => {
  const { id } = await params
  const data = await getSingleDrink(id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  return (
    <div>
      <Link href='/drinks' className='btn btn-primary mt-8 mb-12 uppercase'>
        Back to drinks
      </Link>
      {/* <Image src={drinkJpg} className='w-48 h-48 rounded' alt={title} /> */}
      <Image
        src={imgSrc}
        width={300}
        height={300}
        alt={title}
        className='w-48 h-48 rounded-lg shadow-lg mb-4'
        priority
      />
      <h1 className='text-4xl mb-8'> {title} </h1>
    </div>
  )
}

export default SingleDrinkPage
