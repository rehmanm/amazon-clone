import type { NextPage } from "next";
import SideBar from "../components/SideBar";

const styles = {
  container: "h-full w-full flex bg-[#fff]",
};

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <SideBar />
      {/* <Main /> */}
    </div>
  );
};

export default Home;
