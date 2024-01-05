import PrincipalHome from "@/view/screen/home/PrincipalHome";


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from 'next-i18next.config.js'

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

