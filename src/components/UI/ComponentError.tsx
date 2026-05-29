interface ErrorProp {
  type: string | undefined;
  status: number | undefined;
  message: string | undefined;
}

export default function ComponentError({ type, status, message }: ErrorProp) {
  return (
    <div className="bg-red-800 text-white p-3 rounded-lg">
      <h3 className="text-size-md font-bold">
        {type} {status}
      </h3>
      <p className="mt-3">{message}</p>
    </div>
  );
}
