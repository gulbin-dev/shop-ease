import { Category } from "@utils/types";

// using  Platzi Fake Store API
export const fetchcategory = async () => {
  let res;
  try {
    res = await fetch("https://api.escuelajs.co/api/v1/categories/");
    if (!res.ok) {
      return {
        data: [],
        error: {
          state: true,
          type: "HTTP_ERROR",
          status: res.status,
          message: "Failed to fetch data, please try again later.",
        },
      };
    }
    const data: Category[] = await res.json();
    return {
      data: data,
      error: {
        state: false,
        type: undefined,
        status: undefined,
        message: undefined,
      },
    };
  } catch (err: unknown) {
    const error = err as Error;
    return {
      data: [],
      error: {
        state: true,
        type: error.name,
        status: res?.status,
        message: `${error.message}, please try again later.`,
      },
    };
  }
};
