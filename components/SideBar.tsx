import Image from "next/image";
import * as React from "react";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "web3uikit";

const SideBar = () => {
  const styles = {
    container: "h-full w-[300] flex flex-col bg-[#fff] static",
    profile: ` w-full py-16 flex flex-col justify-center items-center rounded-r-3xl bg-gradient-to-t from-[#0d141c] to-[#42667e] mt-[40px] mb-[50px] border-2 border-[#fb9701]`,
    profilePicContainer: `flex  rounded-xl items-center justify-center w-full h-full mb-5`,
    profilePic: "rounded-xl object-cover",
    userNameInput: "",
    setNickName: "",
    welcome: "text-md mb-2 font-bold text-2xl text-white",
  };

  const { authenticate, isAuthenticated, user } = useMoralis();
  const [nickName, setNickName] = React.useState<string>("");
  const userName = user?.getUsername();

  const handleSetUserName = (e: any) => {
    alert(e.target.value);
  };

  return (
    <div className={styles.container}>
      {/* <ConnectButton /> */}
      <div className={styles.profile}>
        {isAuthenticated && (
          <div className={styles.profilePicContainer}>
            <Image
              alt="profile"
              className={styles.profilePic}
              height={100}
              width={100}
              src={"/vercel.svg"}
            />
          </div>
        )}
        {!userName ? (
          <div>
            <input
              type="text"
              className={styles.userNameInput}
              value={nickName}
              onChange={(e) => setNickName(e.target.value)}
              placeholder="Username..."
            />
            <button className={styles.setNickName} onClick={handleSetUserName}>
              Set UserName
            </button>
          </div>
        ) : (
          <div>
            <div className={styles.welcome}>Welcome {userName}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideBar;
