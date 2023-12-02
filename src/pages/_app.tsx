import Head from 'next/head';
import PrincipalLayout from '@/view/layout/PrincipalLayout';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import "@/styles/_reset.scss" 


// Adicione um tipo para Component se ele não estiver sendo tipado
type CustomAppProps = AppProps & {
  Component: React.FC<AppProps>; // Você pode precisar ajustar isso com base no seu código
};

function App({ Component, pageProps }: CustomAppProps) {
  return (
    <>
        <Head>
          <title>Home</title>
        </Head>
        <PrincipalLayout>
          <Component {...pageProps} />
        </PrincipalLayout>   
    </>

  );
}

export default appWithTranslation(App);
