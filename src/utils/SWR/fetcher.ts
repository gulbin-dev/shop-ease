import { Response } from "@utils/types";

export const fetcher = async <T>(url: string): Promise<Response<T>> => {
  const res = await fetch(url);
  try {
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

    const data = await res.json();
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
        status: res.status,
        message: `${error.message}, please try again later.`,
      },
    };
  }
};
