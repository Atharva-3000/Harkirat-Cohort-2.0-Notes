import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import { Admin } from "@repo/ui/admin";

export default function Home() {
  return (
    <div className={styles.page}>
      <Button appName="web app">Click me</Button>
    </div>
  );
}
