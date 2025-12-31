import { shopifyFetch } from '../lib/shopify';

async function run() {
  console.log('Store:', process.env.NEXT_PUBLIC_SHOPIFY_STORE);
  const query = `
    {
      products(first: 10) {
        edges {
          node {
            id
            title
            variants(first: 10) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await shopifyFetch({ query });
  console.log('Status:', res.status);
  console.log('Body:', JSON.stringify(res.body, null, 2));
}

run();
