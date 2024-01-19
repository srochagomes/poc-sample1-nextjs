import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from 'next-i18next.config.js'

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import SignIn from "@/view/screen/signIn";

i18n
  .use(initReactI18next);

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

export default SignIn;

