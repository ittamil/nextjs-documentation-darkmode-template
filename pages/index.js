import Sidebar from '../components/Sidebar'

export default function Home() {
  return (
    <div>
      <Sidebar>
        <div className="bg-gray-50 border">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to dive in?</span>
            </h2>
          </div>
        </div>
      </Sidebar>
    </div>
  )
}
