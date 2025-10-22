import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex-col justify-items-center space-y-4">
      <img src="/orosemo_name.png" alt="orsemo" className=''/>
      <h1>Hello</h1>
    </div>
  )
}
