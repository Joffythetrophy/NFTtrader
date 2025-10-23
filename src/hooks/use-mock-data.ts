import { useState, useEffect } from 'react';
import { faker } from '@faker-js/faker';

export interface NFT {
  id: string;
  image: string;
  collection: string;
  creator: {
    name: string;
    avatar: string;
  };
  price: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: {
    name:string;
    title: string;
    avatar: string;
  };
}

const createRandomNFT = (): NFT => ({
  id: faker.string.uuid(),
  image: `https://picsum.photos/seed/${faker.string.alphanumeric(10)}/500/500`,
  collection: faker.commerce.productName(),
  creator: {
    name: faker.person.fullName(),
    avatar: faker.image.avatar(),
  },
  price: faker.commerce.price({ min: 0.1, max: 10, dec: 2 }),
});

const createRandomTestimonial = (): Testimonial => ({
    id: faker.string.uuid(),
    quote: faker.lorem.paragraph(),
    author: {
        name: faker.person.fullName(),
        title: faker.person.jobTitle(),
        avatar: faker.image.avatar(),
    }
});


export function useMockData() {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const nftsData = Array.from({ length: 8 }, createRandomNFT);
    setNfts(nftsData);
    const testimonialsData = Array.from({ length: 3 }, createRandomTestimonial);
    setTestimonials(testimonialsData);
  }, []);

  return { nfts, testimonials };
}
