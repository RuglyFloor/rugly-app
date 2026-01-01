'use server';

import { shopifyFetch } from '@/lib/shopify';
import { redirect } from 'next/navigation';

export async function createCartAndRedirect(variantId: string) {
  const mutation = `
    mutation cartCreate($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
      }
    }
  `;

  const res = await shopifyFetch({
    query: mutation,
    variables: {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity: 1,
          },
        ],
      },
    },
  });

  const checkoutUrl = res.body.data.cartCreate.cart.checkoutUrl;
  redirect(checkoutUrl);
}
