export async function shopifyFetch({ query, variables = {} }: { query: string, variables?: Record<string, unknown> }) {
  const endpoint = `https://${process.env.NEXT_PUBLIC_SHOPIFY_STORE}/api/2025-01/graphql.json`;
  const key = process.env.SHOPIFY_STOREFRONT_ACCESS_TOKEN;

  try {
    const result = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Shopify-Storefront-Access-Token': key || '',
      },
      body: JSON.stringify({ query, variables }),
    });

    return {
      status: result.status,
      body: await result.json(),
    };
  } catch (e) {
    console.error('Error fetching from Shopify:', e);
    throw {
      error: e,
      query,
    };
  }
}
