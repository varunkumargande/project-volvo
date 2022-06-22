import Head from "next/head";
import { View, Logo, StyleProvider, ThemeProvider } from "vcc-ui";
import volvo from "vcc-ui/dist/themes/volvo";

export default function Layout({
  siteTitle,
  siteDescription,
  children,
}: {
  siteTitle?: string;
  siteDescription?: string;
  children: React.ReactNode;
}) {
  const title = siteTitle || "India | Volvo Cars";
  const description =
    siteDescription ||
    "Welcome to the India site of Volvo Cars. Explore and design your favorite Volvo SUV, estate and sedan today.";

  return (
    <div className={`container`}>
      <Head>
        <title>{title}</title>
        <link
          rel="icon"
          href="https://www.volvocars.com/static/shared/images/favicons/favicon-32x32.v2.png"
        />
        <meta name="description" content={description} />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            title
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content={description} />
      </Head>
      <StyleProvider>
        <ThemeProvider theme={volvo}>
          <header>
            <View
              alignItems="start"
              extend={{ marginTop: "20px", marginBottom: "20px" }}
            >
              <Logo height={16} type="spreadmark" />
            </View>
          </header>
          <main>{children}</main>
        </ThemeProvider>
      </StyleProvider>
    </div>
  );
}
