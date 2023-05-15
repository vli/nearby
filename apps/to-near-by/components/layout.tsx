import { Header } from '@tonearby/rui';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <footer />
    </>
  );
}
