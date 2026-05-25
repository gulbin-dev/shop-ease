import { Category } from "@utils/types";

// using  Platzi Fake Store API
export const fetchcategory = async () => {
  let res;
  try {
    res = await fetch("https://api.escuelajs.co/api/v1/categories/");
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
    const data: Category[] = await res.json();
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
