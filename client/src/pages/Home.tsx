import Navbar from "../components/Navbar";
import MainLayout from "../layout/MainLayout";
import Posts from "../layout/Posts";

export default function Home() {
  return (
    <>
    <Navbar />
    <MainLayout>
      <Posts />
    </MainLayout>
    </>
  );
}
