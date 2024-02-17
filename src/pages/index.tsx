import PrincipalHome from "@/view/screen/home/PrincipalHome";


import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import nextI18NextConfig from 'next-i18next.config.js'
import { GetServerSidePropsContext } from "next";


export async function getServerSideProps(context:GetServerSidePropsContext) {
    const { query } = context;
    const { emailConfirmed } = query;
    const { locale='ptBR' } = context;
    
    const headers = {
      // Defina cabeçalhos de cache aqui
      //'Cache-Control': 'public, max-age=86400', // Um dia em segundos
      'Cache-Control': 'public, max-age=900', // 15 minutos em segundos
    };

    
    
    if (emailConfirmed) {      
      return {        
        redirect: {
          destination: '/signUp?emailConfirmed='+emailConfirmed,          
          context,
          permanent: false,
        },
      };
    }
  

    return {
        props: {
            headers,
            ...(await serverSideTranslations(
              locale,
              ['common', 'field', 'button', 'datedescription'],
              nextI18NextConfig
            )),
          },
        }
  }

  
export default PrincipalHome;

