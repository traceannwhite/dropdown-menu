import type { NextPage } from "next";
import styles from "../styles/Dropdown.module.css";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Avatar from "../components/Avatar";
import {
  BackpackIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  ExitIcon,
  GearIcon,
} from "@radix-ui/react-icons";

const AccountDropdown: NextPage = () => {
  return (
    <div className={styles.container}>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger className={styles.trigger}>
          <Avatar />
          <ChevronDownIcon className={styles["down-arrow"]} />
        </DropdownMenu.Trigger>

        <DropdownMenu.Content loop className={styles.content} sideOffset={5}>
          <DropdownMenu.Item className={styles.item}>
            View Your Profile
          </DropdownMenu.Item>

          <DropdownMenu.Root>
            <DropdownMenu.TriggerItem className={styles.item}>
              Account{" "}
              <span className={styles["end-icons"]}>
                <ChevronRightIcon />
              </span>
            </DropdownMenu.TriggerItem>
            <DropdownMenu.Content loop className={styles.content}>
              <div className={styles.items}>
                <GearIcon />
                <DropdownMenu.Item textValue="Settings" className={styles.item}>
                  Settings
                </DropdownMenu.Item>
              </div>
              <div className={styles.items}>
                <BackpackIcon />
                <DropdownMenu.Item
                  textValue="Purchases and Reviews"
                  className={styles.item}
                >
                  Purchases and Reviews
                </DropdownMenu.Item>
              </div>
            </DropdownMenu.Content>
          </DropdownMenu.Root>

          <DropdownMenu.Separator className={styles.separator} />

          <div className={styles.items}>
            <ExitIcon />
            <DropdownMenu.Item className={styles.item}>
              Sign Out
            </DropdownMenu.Item>
          </div>
          <DropdownMenu.Arrow className={styles["box-arrow"]} />
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  );
};

export default AccountDropdown;

// This dropdown menu:
// -Ues RadixPrimitives
// -Has Collision Aware Animation
// -Is accessible with mouse, keyboard, and voice over
