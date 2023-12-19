import Nav from "@components/Nav";
import Provider from "@components/Provider";
import "@styles/globals.css";
export const metadata = {
  title: "Promptia",
  description: "Promptia",
};
const layout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        {(process.env.NODE_ENV === "development" ||
          process.env.VERCEL_ENV === "preview") && (
          // eslint-disable-next-line @next/next/no-sync-scripts
          <script
            data-project-id="QPhrjZvFlAoLjlx3eRVTukkxnSAE5R49hcXndKRk"
            data-is-production-environment="false"
            src="https://snippet.meticulous.ai/v1/meticulous.js"
          />
        )}
        ...
      </head>
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav /> {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default layout;
