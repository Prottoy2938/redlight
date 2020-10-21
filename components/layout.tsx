import Alert from "./alert";
import Footer from "./footer";
import Meta from "./meta";
import PostType from "../types/post";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
  post: PostType;
};

const Layout = ({ preview, children, post }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        {preview && <Alert preview={preview} />}

        <main>{children}</main>
      </div>
      <Footer post={post} />
    </>
  );
};

export default Layout;
