import Layout from "./components/Layout";
import Header from "./components/Layout/Header";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Layout mobileFirst={true}>
          <Header mobileFirst={true} title="asdf"></Header>
          {children}
        </Layout>
      </body>
    </html>
  );
}
