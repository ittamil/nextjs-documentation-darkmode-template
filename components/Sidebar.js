import Topnav from './Topbar';

function Sidebar({ children }) {

  return (
    <div>
      <div
        className={`min-h-screen  flex flex-col flex-auto flex-shrink-0 antialiased bg-white`}
      >
       <Topnav/>
        <div className={'bg-white dark:bg-black hidden md:fixed md:flex md:flex-col w-64 md:h-full border-r dark:border-none'}>
          <div className={'overflow-y-auto overflow-x-hidden flex-grow'}>
            <ul className={'flex flex-col'}>
              <li>
                <div className={'px-2 mt-20'}>
                  <span className={'text-md tracking-wide'}>
                    
                      <div>
                        <a
                         
                          href=""
                          className={
                            'px-5 transition capitalize duration-400 ease-in text-black hover:bg-black hover:text-white dark:text-white dark:hover:bg-white dark:hover:text-black relative flex flex-row items-center py-2 focus:outline-none font-bold'
                          }
                        >
                          Home
                        </a>
                      </div>
                   
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      
          <div className={'m-1 md:pl-64'}>
            <div className={'px-5 pt-24'}>{children}</div>
          </div>
      </div>
    </div>
  )
}
export default Sidebar
