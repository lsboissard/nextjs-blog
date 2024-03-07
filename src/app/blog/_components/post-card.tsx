import Image from "next/image"
import BookmarkButton from "./bookmark-button"

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
        <div className="cursor-pointer min-w-64 md:col-span-2 flex flex-col bg-zinc-50 dark:bg-slate-900 rounded-lg 
        ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-8 hover:ring-zinc-100 dark:hover:ring-zinc-900 
        hover:transition-all hover:ring-offset-1 hover:ring-offset-zinc-300 dark:hover:ring-offset-zinc-700 overflow-hidden">
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
              <div className='flex flex-col gap-2'>
                <div className='flex items-center justify-between'>
                  <span className="bg-black/45 px-3 text-white/85 py-1 text-xs w-fit rounded-full shadow">Publicado em 29/02/2024</span>
                  <span className="bg-zinc-100/85 dark:bg-zinc-900/85 shadow text-zinc-500 font-bold uppercase px-3 py-1 w-fit rounded-full text-xs">{category}</span>
                </div>
                <div className='shadow bg-black/45 p-3 w-fit rounded-lg '>
                  <span className=' text-white text-2xl font-bold leading-snug tracking-wide'>{title}</span>
                </div>
              </div>
            </div>
            <BookmarkButton />
          </div>
        </div>
      }

      {featured == false &&
        <div className="relative min-w-64 cursor-pointer hover:transition-all flex flex-col bg-zinc-50 dark:bg-zinc-900 
        rounded-lg ring-1 ring-zinc-200 dark:ring-zinc-800 hover:ring-8 hover:ring-zinc-100 dark:hover:ring-zinc-800 
        hover:ring-offset-1 hover:ring-offset-zinc-300 dark:hover:ring-offset-zinc-700 overflow-hidden">
          <div className="relative h-2/3 border-b border-zinc-200 dark:border-zinc-800 overflow-hidden" >
            <Image
              className="hover:scale-125 transition duration-500 select-none"
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
            <div className='absolute bottom-2 left-2 right-2 flex items-center justify-end'>
              <span className="shadow bg-zinc-100/85 dark:bg-zinc-900/85 text-zinc-500 font-bold uppercase px-3 py-1 rounded-full text-xs">{category}</span>
            </div>
          </div>
          <div className="h-1/3 p-2 bg-zinc-50 dark:bg-zinc-950">
            <span className="text-xl  text-zinc-900 dark:text-zinc-100 leading-snug font-bold tracking-wide line-clamp-2">{title}</span>
            <span className="text-xs text-zinc-500">Publicado em 29/02/2024</span>
          </div>

          <BookmarkButton />
        </div>
      }
    </>
  )
}