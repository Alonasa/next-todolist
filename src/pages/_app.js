import ThemeProviderWrapper from "@/app/ThemeProviderWrapper";

function MyApp({Component, pageProps}) {
    return (
        <ThemeProviderWrapper>
            <Component {...pageProps} />
        </ThemeProviderWrapper>
    );
}

export default MyApp;