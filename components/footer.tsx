import Container from "./container";
import {
  DEFAULT_URL,
  DEFAULT_GITHUB_URL,
  DEFAULT_FOOTER_APP,
} from "../lib/constants";
import PostType from "../types/post";
type Props = {
  post?: PostType;
};

const Footer = ({ post }: Props) => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          {post ? (
            <>
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                {post.title}
              </h3>
              <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                <a
                  href={post.url}
                  className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  Visit
                </a>
                {post.github && (
                  <a
                    href={post.github}
                    className="mx-3 font-bold hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Default homepage footer */}
              <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
                {DEFAULT_FOOTER_APP}
              </h3>

              <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
                <a
                  href={DEFAULT_URL}
                  className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
                >
                  Visit
                </a>
                {DEFAULT_GITHUB_URL && (
                  <a
                    href={DEFAULT_GITHUB_URL}
                    className="mx-3 font-bold hover:underline"
                  >
                    View on GitHub
                  </a>
                )}
              </div>
            </>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
