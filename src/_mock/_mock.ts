const _mock = {
  image: {
    cover: (index: number) =>
      `https://api-dev-minimal-v4.vercel.app/assets/images/covers/cover_${index + 1}.jpg`,
    product: (index: number) =>
      `https://api-dev-minimal-v4.vercel.app/assets/images/products/product_${index + 1}.jpg`,
    avatar: (index: number) =>
      `https://api-dev-minimal-v4.vercel.app/assets/images/avatars/avatar_${index + 1}.jpg`,
  },
};

export default _mock;
