import Link from 'next/link'

export default function page() {
  return (
    <div className='flex flex-col gap-4 justify-center items-center'>
      <h1 className='text-2xl shadow-md'>Welcome to Home Page</h1> 
      <Link href='/login' className='underline text-blue-600 '>Go to login Page</Link>
    </div>
  )
}
