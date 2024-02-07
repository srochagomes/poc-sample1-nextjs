import Head from 'next/head';
import PrincipalLayout from '@/view/layout/PrincipalLayout';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import "@/view/styles/_reset.scss" 
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider } from 'react-redux';
import store from '@/manager-state';
import MessageContainer from '@/view/components/message-general';

i18n
  .use(initReactI18next);

// Adicione um tipo para Component se ele não estiver sendo tipado
type CustomAppProps = AppProps & {
  Component: React.FC<AppProps>; // Você pode precisar ajustar isso com base no seu código
};



function App({ Component, pageProps }: CustomAppProps) {






  return (
    <>
      <Provider store={store}>
              <Head>
                <title>Home</title>
              </Head>
              <MessageContainer/>
              <PrincipalLayout>
                <Component {...pageProps} />
              </PrincipalLayout>   

      </Provider>
    </>

  );
}




export default appWithTranslation(App);
