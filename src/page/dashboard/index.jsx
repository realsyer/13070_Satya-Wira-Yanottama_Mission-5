import AuthLayout from "@/components/layout/auth-layout";
import ContinueWatch from "@/components/molecules/continue-watch";
import DashboardHero from "@/components/molecules/dashborad-hero";
import ListFilms from "@/components/molecules/film-list";

export default function DashboardPage() {
  return (
    <AuthLayout>
      <div className="flex flex-col">
        <DashboardHero />
        <ContinueWatch />
        <ListFilms title={"Top Rating Film dan Series Hari ini"} ids={[916224, 507086, 675353, 99966, 177572, 588228, 937278]}/>
        <ListFilms title={"Film Trending"} ids={[588228, 640146, 447365, 937278, 447277, 916224, 507086, 675353]}/>
        <ListFilms title={"Rilis Baru"} ids={[447277, 158258, 177572, 99966, 768362, 916224, 507086, 675353]}/>
      </div>
    </AuthLayout>
  )
}