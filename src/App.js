import FlipCard from "./FlipCard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.scss";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container">
        <div className="row h-100">
          <div className="col d-flex flex-column flex-md-row justify-content-around align-items-center">
            <FlipCard />
          </div>
        </div>
      </div>
    </QueryClientProvider>
  );
}
