


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from 'next-i18next.config.js'
import LoginHome from "@/view/screen/login";

export async function getStaticProps({ locale }:any) {
    return {
        props: {
            ...(await serverSideTranslations(
              locale,
              ['common', 'field', 'button'],
              nextI18NextConfig
            )),
          },
        }
  }

export default LoginHome;

