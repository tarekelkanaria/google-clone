import HomeBody from "@/components/Home/HomeBody";
import HomeHeader from "@/components/Home/HomeHeader";
import Providers from "@/components/Providers";

export default function Home() {
  return (
    <>
      <HomeHeader />
      <Providers>
        <HomeBody />
      </Providers>
    </>
  );
}
