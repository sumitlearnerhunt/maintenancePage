import Image from "next/image";
import { NextResponse } from "next/server";
import Styles from "../styles/maintenance.module.css";
import Head from "next/head";
// import illustration from "/illustration.svg"
export default function Home() {


  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <div className={Styles.topbar}>
        <div className={Styles.contactsection}>
          <a href="tel:+918860077807" className={Styles.phonenumber}>
            📞 +91 8860077807
          </a>
        </div>
        <div className={Styles.appsection}>
          <span>Download the app to find best colleges for you</span>
          <a
            href="https://play.google.com/store/apps/details?id=com.learnerhunt.app"
            target="_blank"
            className={Styles.downloadbtn}
          >
            DOWNLOAD NOW
          </a>
        </div>
        <div className={Styles.socialsection}>
          <span>Catch us on your socials!</span>
          <div className={Styles.socialicons}>
            <a href="https://www.facebook.com/learnerhunt/" target="_blank">
              <Image
                src="/images/facebook.webp"
                width={20}
                height={20}
                alt="Facebook"
              />
            </a>
            <a href="https://x.com/learnerhunt" target="_blank">
              <Image
                src="/images/twitter.webp"
                width={20}
                height={20}
                alt="X (Twitter)"
              />
            </a>
            <a
              href="https://www.instagram.com/learnerhunt_india/"
              target="_blank"
            >
              <Image
                src="/images/instagram.webp"
                width={20}
                height={20}
                alt="Instagram"
              />
            </a>
            <a
              href="https://in.linkedin.com/company/learnerhunt"
              target="_blank"
            >
              <Image
                src="/images/linkedin.webp"
                width={20}
                height={20}
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.youtube.com/@Learnerhunt" target="_blank">
              <Image
                src="/images/youtube.webp"
                width={20}
                height={20}
                alt="YouTube"
              />
            </a>
          </div>
        </div>
      </div>

      <div className={Styles.container}>
        <header className={Styles.header}>
          <nav className={Styles.nav}>
            <Image
              src="/LHlogo.webp"
              className={Styles.logo}
              alt="learnerhunt"
              width={200}
              height={200}
            />
            <div className={Styles.menu}>
              <a
                href="https://learnerhunt.com/mocktest"
                className={Styles.menuItem}
                target="_blank"
                rel="noopener noreferrer"
              >
                Mocktest
              </a>
            </div>
          </nav>
        </header>
        <main className={Styles.main}>
          <img src="/images/illustration.svg" alt="Maintenance person" />
          <h1 className={Styles.title}>Oops! site under maintenance</h1>
          <p className={Styles.text}>
            We apologize for any inconveniences caused. We’ve almost done.
          </p>
        </main>
        <footer className={Styles.footer}>
          &#169; 2024 Decred Digital Services Pvt. Ltd
        </footer>
      </div>
    </>
  );
}
