import PrincipalHome from "@/view/screen/home/PrincipalHome";


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from 'next-i18next.config.js'
import { appWithTranslation } from "next-i18next";

export async function getStaticProps({ locale }:any) {
    return {
        props: {
            ...(await serverSideTranslations(
              locale,
              ['common', 'field', 'button', 'datedescription'],
              nextI18NextConfig
            )),
          },
        }
  }

  

export default PrincipalHome;

