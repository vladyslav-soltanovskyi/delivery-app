import { FC } from "react";
import { MaterialIcon } from "@ui/icon/MaterialIcon";

import styles from "./copy-text.module.scss";
import useCopy from "./useCopy";

interface ICopyTextProps {
  text: string;
}

const CopyText: FC<ICopyTextProps> = ({ text }) => {
  const { copied, copy } = useCopy(text);
  return (
    <div className={styles.copy} onClick={copy}>
      <MaterialIcon name={
        copied
          ? "MdDone"
          : "MdOutlineContentCopy"
      } />
    </div>
  );
};

export default CopyText;