import ReactDOM from 'react-dom/client'
import Routing from './navagation/routing/routing.tsx'
import { Provider as StoreProvider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'
import { store } from '@store/store.ts';
import './styles/index.scss'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <StoreProvider store={store}>
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  </StoreProvider>,
)
