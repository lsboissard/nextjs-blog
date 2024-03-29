import PostCard from './_components/post-card'

export default function Blog() {
  return (
    <div className="mx-auto max-w-5xl w-full">
      <div className="flex items-center justify-between uppercase text-sm py-4 text-zinc-900 px-3 lg:px-0">
        <div>
          <span className="font-bold dark:text-zinc-50">Últimos Posts</span>
        </div>
        <div className="flex gap-2 items-center">
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.15654 17.2942C1.28472 16.4449 0.932898 15.2271 1.0103 13.6943C1.08811 12.1533 1.59867 10.4109 2.31268 8.70513C3.0224 7.00957 3.90887 5.40712 4.68817 4.16171C5.44622 2.95025 6.05033 2.16052 6.26695 1.93125C6.28974 1.92056 6.34843 1.89388 6.46099 1.85799C6.66032 1.79443 6.94062 1.72871 7.30133 1.66438C8.0198 1.53625 8.96264 1.42994 10.0161 1.34181C12.1185 1.16593 14.5665 1.06983 16.3477 1.00165C17.3043 0.96503 18.2974 1.54707 18.7748 2.41411C19.6383 3.98246 20.7709 6.13575 21.6545 8.03244C22.0974 8.98309 22.4686 9.8499 22.7123 10.5377C22.8345 10.8827 22.9172 11.1619 22.9625 11.3721C22.9946 11.5209 22.9983 11.5935 22.9998 11.611C22.9714 11.7174 22.879 11.9853 22.691 12.4205C22.4947 12.875 22.2198 13.4539 21.8762 14.1081C21.1881 15.4187 20.2396 17.0035 19.1213 18.4763C17.996 19.9584 16.738 21.2747 15.4434 22.1026C14.1572 22.9251 12.9381 23.2061 11.7814 22.8443C10.9596 22.5873 8.90386 21.5458 6.79537 20.3367C5.76151 19.7438 4.74726 19.1292 3.90836 18.5808C3.04732 18.018 2.43573 17.5661 2.15654 17.2942Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="3.02944" cy="3.02944" r="2.02944" transform="matrix(0.866025 0.5 0.5 -0.866025 10.0024 8.7178)" stroke="currentColor" strokeWidth="2" />
            <rect x="5.224" y="12.9551" width="10.0999" height="2.01963" rx="1.00981" transform="rotate(30 5.224 12.9551)" fill="currentColor" />
          </svg>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            #tag1
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            #tag2
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            #tag3
          </a>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:px-0 px-3 grid-cols-1 auto-rows-[300px] gap-5">
        <PostCard
          title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          image='/img/img1.jpg'
          category='cat1'
          featured={true}
        />
        <PostCard
          title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          image='/img/img2.jpg'
          category='cat1'
          featured={false}
        />
        <PostCard
          title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          image='/img/img3.jpg'
          category='cat2'
          featured={false}
        />
        <PostCard
          title='Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
          image='/img/img1.jpg'
          category='cat1'
          featured={false}
        />
        <PostCard
          title='Lorem ipsum dolor, sit amet consectetur adipisicing elit. auhau ahu aua uha uahu ahu a'
          image='/img/img2.jpg'
          category='cat2'
          featured={false}
        />
      </div>
    </div>
  )
}