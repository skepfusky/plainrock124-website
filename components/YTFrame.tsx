import Iframe from "react-iframe";
import styles from '../styles/YTFrame.module.scss';

interface MerchLinkInBio {
  link: string;
}

export default function YTFrame({ link }: MerchLinkInBio) {
  return (
    <Iframe
      url = {"https://youtube.com/embed/" + link}
      id={styles.embedResponsive}
      width="100%"
      height="100%"
    />
  );
}