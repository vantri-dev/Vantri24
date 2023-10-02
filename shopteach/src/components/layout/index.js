import Header from "./Header/header";
import Footer from "./Footer/footer";
function DefaultLayout({ children }) {
  return (
    <>
      <div className="w-full bg-f8fafc fixed top-0 border-b border-b-e2e8f0  px-40px  z-999  ">
        <Header />
      </div>
      <div className="mt-[84px] mb-[13px]">{children}</div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default DefaultLayout;
