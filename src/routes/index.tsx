import { createFileRoute } from '@tanstack/react-router'
import { useLanguage } from '@/context/LanguageContext';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { t } = useLanguage();
  return (
    <div>
      <div>
        <div className=' relative w-full'>
          <video src="vids\2025-06-22 18-45-08.mp4" className='top-0 object-cover -z-10 flex w-full' autoPlay loop muted playsInline></video>
          <div className='absolute bottom-40 left-30 z-10 border-2 border-transparent rounded backdrop-blur-sm shadow-md'>
            <h1>{t.mainPage.Greeting}</h1>
            <p>{t.mainPage.subGreeting}</p>
          </div>
        </div>
        
      </div>
      <div className="flex flex-col items-center justify-center">
      </div>
    </div>
  )
}
