import Announcement from "../components/Announcement";
import Slider from '../components/Slider';
import Navbar from '../components/Navbar';
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Newsletter />
    </>
  )
}
