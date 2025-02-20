import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import "swiper/swiper-bundle.css";
import { Provider } from "./components/ui/provider";
import { Toaster } from "./components/ui/toaster";
import { globalStyles } from "./theme/global";
const ErrorFallback = () => {
  return (
    <div
      style={{
        width: "100dvw",
        maxWidth: "100%",
        overflowX: "hidden",
        height: "100dvh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1
        style={{
          color: "black",
          fontSize: "24px",
        }}
      >
        Something went wrong
      </h1>
      <button
        style={{
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
          backgroundColor: "blue",
          color: "white",
          cursor: "pointer",
        }}
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};

const Providers = ({ children }: IProviders) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <BrowserRouter>
        <Provider>
          <Toaster />
          {children}
        </Provider>
        {globalStyles()}
      </BrowserRouter>
    </ErrorBoundary>
  );
};

interface IProviders {
  children: React.ReactNode;
}

export default Providers;
