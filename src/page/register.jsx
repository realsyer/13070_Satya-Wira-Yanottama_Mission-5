import { Button } from "@/components/atoms/ui/button"
import backgroundImage from "../assets/bg-login.jpg"
import googleImage from "../assets/google.png"
import Logo from "../components/atoms/logo"
import { Input } from "../components/atoms/ui/input"
import Label from "@/components/atoms/ui/label"
import { useNavigate } from "react-router-dom"

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/dashboard")
  }
  
  const handleGoogleRegister = () => {
    navigate("/dashboard")
  }
  return (
    <div className="relative flex items-center justify-center w-screen h-screen">
      <img src={backgroundImage} alt="" className="w-full h-full absolute inset-0 object-cover object-center" />
      <div className="relative mt-20 md:m-auto w-full max-w-[85vw] md:max-w-[529px] p-6 md:p-10 bg-dark bg-opacity-[0.84] rounded-2xl flex flex-col items-center">
        <Logo className={"h-6 md:h-11"} />
        <div className="mt-5 md:mt-9 flex flex-col gap-2 items-center">
          <span className="font-lato text-lg md:text-[32px] font-bold text-white">Daftar</span>
          <span className="font-lato text-[10px] md:text-base font-normal">Selamat datang!</span>
        </div>

        <div className="flex flex-col w-full">
          <div className="flex flex-col mt-5 md:mt-9 gap-1.5 w-full">
            <Label>Username</Label>
            <Input placeholder={"Masukkan username"} />
          </div>
          <div className="flex flex-col mt-5 md:mt-9 gap-1.5 w-full">
            <Label>Kata Sandi</Label>
            <Input type="password" placeholder={"Masukkan kata sandi"} />
          </div>
          <div className="flex flex-col mt-5 md:mt-9 gap-1.5 w-full">
            <Label>Konfirmasi Kata Sandi</Label>
            <Input type="password" placeholder={"Masukkan kata sandi"} />
            <div className="flex text-[10px] md:text-base items-center justify-between mt-1">
              <div className="flex items-center gap-1">
                <span className="text-light-secondary">Sudah punya akun?</span>
                <a href="/login" className="text-white">Masuk</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 mt-5 md:mt-9 items-center">
            <Button onClick={handleRegister} className="w-full">Daftar</Button>
            <span className="text-[10px] md:text-sm text-light-disabled">Atau</span>
            <Button onClick={handleGoogleRegister} className="w-full" variant={"transparent"}>
              <img src={googleImage} alt="" width={18} height={18} />
              <span>Daftar dengan Google</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}