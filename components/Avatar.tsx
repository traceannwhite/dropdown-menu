import * as Avatar from "@radix-ui/react-avatar";
import styles from "../styles/Avatar.module.css";

const AccountAvatar = () => {
  // const getInitials = (fullName) => {
  //   const allNames = fullName.trim().split(" ");
  //   const initials = allNames.reduce((acc, curr, index) => {
  //     if (index === 0 || index === allNames.length - 1) {
  //       acc = `${acc}${curr.charAt(0).toUpperCase()}`;
  //     }
  //     return acc;
  //   }, "");
  //   return initials;
  // };

  return (
    <div>
      {/* <Avatar.Root>
        <Avatar.Image>{userData.image}</Avatar.Image>
        <Avatar.Fallback>{userData.fullName}</Avatar.Fallback>
      </Avatar.Root> */}
      <Avatar.Root className={styles.avatar}>
        <Avatar.Image
          src="/tw-image.png"
          alt="Trace White"
          className={styles["avatar-pic"]}
        />
        <Avatar.Fallback className={styles["avatar-initials"]}>
          TW
        </Avatar.Fallback>
      </Avatar.Root>
    </div>
  );
};

export default AccountAvatar;
