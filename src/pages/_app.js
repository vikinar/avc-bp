import React from 'react'
import {Provider} from "react-redux"
import App, {Container} from "next/app"
import withRedux from "next-redux-wrapper"
import {makeStore} from "../init/store"
// import Layout from "../components/Layout";
import Router from 'next/router';

import '../style.scss'
// import 'react-image-lightbox/style.css'


//Binding events.
Router.events.on('routeChangeStart', () => NProgress.start()); Router.events.on('routeChangeComplete', () => NProgress.done()); Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp