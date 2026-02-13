
import {MyRoutes} from "./routes/router.tsx";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

function App() {
const queryClient = new QueryClient();
  return (
   <QueryClientProvider client={queryClient}>
       <MyRoutes/>
       <ReactQueryDevtools initialIsOpen ={false}></ReactQueryDevtools>
   </QueryClientProvider>
  )
}

export default App
