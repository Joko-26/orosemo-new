import { createFileRoute } from '@tanstack/react-router'
import { useLanguage } from '@/context/LanguageContext';

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center">
    </div>
  )
}
