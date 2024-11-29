import Navbar from "../molecules/navbar";

export default function AuthLayout ({ children }){
  return (
    <div className="w-screen flex flex-col h-screen overflow-y-auto bg-dark">
      <Navbar />
      { children }
    </div>
  )
}