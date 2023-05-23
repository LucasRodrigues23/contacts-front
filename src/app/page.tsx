import LoginForm from "@/components/LoginForm";


export default function Home() {
  return (
    <main className="flex items-center h-screen">
      <div className="fixed top-0 flex gap-4 items-center justify-end w-full p-6">
        <button className="bg-indigo-300 p-4 rounded-md w-40">Login</button>
        <button className="bg-indigo-300 p-4 rounded-md w-40">Sign</button>
      </div>
      <div>
        <LoginForm />
      </div>
      <div></div>
    </main>
  )
}
