// import { createClient, provideClient } from '@urql/vue';

// export const client = createClient({
//   url: 'https://graph.myshelf.info/graphql',
// });

import { createClient, provideClient } from '@urql/vue';

const client = createClient({
  url: 'http://localhost:3000/graphql',
});

provideClient(client)

