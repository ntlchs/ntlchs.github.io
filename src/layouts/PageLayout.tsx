import Footer from "../components/Footer";
import Header from "../components/Header";
import Layout from "./Layout.astro";


function PageLayout({ title, children }: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Layout title={title}>
      <Header />
      <main className="w-full flex-grow">
        <div className="flex tablet:max-w-7xl mx-auto py-md">
          {children}
        </div>
      </main>
      <Footer />
    </Layout>

  )
}

export default PageLayout