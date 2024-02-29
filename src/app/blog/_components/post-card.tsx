import Image from "next/image"

interface PostCardProps {
  title: string
  image: string
  category?: string
  featured: boolean
}

export default function PostCard({ title, image, category, featured }: PostCardProps) {
  return (
    <>
      {featured == true &&
        <div className="cursor-pointer min-w-64 md:col-span-2 flex flex-col bg-zinc-50 rounded-lg ring-1 ring-zinc-200 hover:ring-8 hover:ring-zinc-100 hover:transition-all hover:ring-offset-1 hover:ring-offset-zinc-300 overflow-hidden">
          <div className="h-full relative">
            <Image
              className="select-none hover:scale-125 transition duration-500"
              priority={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
              src={image}
              width={500}
              height={700}
              alt={title}
            />
            <div className=' absolute bottom-2 left-2 right-2  '>
              <div className='flex flex-col gap-3'>
                <div className='flex items-center shadow justify-center bg-green-100/85 text-green-500 font-bold uppercase px-3 py-1 w-fit rounded-full text-xs'>
                  <span>{category}</span>
                </div>
                <div className='bg-black/45 p-3 w-fit rounded-lg shadow'>
                  <span className='text-zinc-50 text-2xl font-bold leading-snug tracking-wide'>{title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      }

      {featured == false &&
        <div className="relative min-w-64 cursor-pointer hover:transition-all flex flex-col bg-zinc-50 rounded-lg ring-1 ring-zinc-200 hover:ring-8 hover:ring-zinc-100 hover:ring-offset-1 hover:ring-offset-zinc-300 overflow-hidden">
          <div className="h-2/3 border-b border-zinc-200 overflow-hidden" >
            <Image
              className="hover:scale-125 transition duration-500 select-none "
              priority={false}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover"
              }}
              src={image}
              width={500}
              height={700}
              alt={title}
            />
          </div>
          <div className="h-1/3 p-2 bg-white">
            <span className="text-xl leading-snug font-bold tracking-wide line-clamp-2">{title}</span>
          </div>
          <div className="absolute right-3 top-3">
            <div className="flex items-center justify-center hover:bg-white/95 hover:transition-all rounded-full h-8 bg-white/85 w-8">
              <svg className="h-4" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4.23207 22.6515L4.23203 22.6514L4.22222 22.6583C3.04571 23.4839 1.4214 22.7367 1.30876 21.2843C1.17636 19.577 0.999972 16.4489 1 11.9001V11.818V11.818C0.999969 10.0123 1.00095 8.43904 1.12977 7.12626C1.26038 5.79534 1.53147 4.60354 2.16092 3.63277C3.47718 1.60276 6.0125 1.01675 9.99586 1.00034C13.9839 0.983921 16.5228 1.56716 17.8404 3.61005C18.4689 4.58457 18.7397 5.7819 18.8703 7.11733C18.9991 8.43513 19 10.0125 19 11.8189V11.9001C19 16.4489 18.8236 19.577 18.6912 21.2843C18.5785 22.7367 16.9543 23.4839 15.7778 22.6583L15.7778 22.6583L15.7679 22.6515C14.7359 21.9456 13.7808 21.1856 13.0366 20.5931L13.0231 20.5824C12.6849 20.3132 12.378 20.0688 12.1372 19.8903C11.6855 19.5554 11.3082 19.3268 10.9587 19.186C10.5782 19.0328 10.271 19 10 19C9.729 19 9.42177 19.0328 9.04133 19.186C8.69178 19.3268 8.31454 19.5554 7.86274 19.8903L8.45823 20.6937L7.86274 19.8903C7.62195 20.0688 7.31488 20.3133 6.97665 20.5826L6.96343 20.5931C6.21919 21.1856 5.26412 21.9456 4.23207 22.6515Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5.00391C13 5.00391 13.5 5.00011 14.25 5.74817C15 6.49623 15 9.00001 15 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      }
    </>
  )
}