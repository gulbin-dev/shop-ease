import { Product } from "@utils/types";

// using  Platzi Fake Store API
export const fetchProducts = async () => {
  let res;
  try {
    res = await fetch("https://api.escuelajs.co/api/v1/products");
    if (!res.ok) {
      throw {
        data: undefined,
        error: {
          state: true,
          type: "HTTP_ERROR",
          status: res.status,
          message: "Failed to fetch data, please try again",
        },
      };
    }
    const data: Product[] = await res.json();
    return data;
  } catch (err: unknown) {
    const error = err as Error;
    throw {
      data: undefined,
      error: {
        state: true,
        type: `${error.name}`,
        status: res?.status,
        message: `${error.message}, please try again`,
      },
    };
  }
};
