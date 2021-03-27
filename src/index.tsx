import ReactDOM from 'react-dom';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeManager } from './Theme';

const client = new QueryClient();

ReactDOM.render(
  <ThemeManager>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </ThemeManager>,
  document.getElementById('root')
);
