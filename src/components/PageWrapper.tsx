"use client";

import { Provider } from "react-redux";
import { store } from "@/utils/redux-toolkit/store";
import { useAppSelector } from "@/utils/redux-toolkit/typed-hooks";
import { RootState } from "@/utils/redux-toolkit/store";
import { Suspense, useSyncExternalStore } from "react";

// creates a no-op subscribe function for useSyncExternalStore,
// as we don't need to subscribe to any external store for this component
const emptySubscribe = () => () => {};

const getServerSnapshot = () => false; // Server is never "mounted"
const getClientSnapshot = () => true; // Client is always "mounted"

const Rehydrated = ({ children }: { children: React.ReactNode }) => {
  const isRehydrated = useAppSelector<RootState>(
    (state) => state.reduxRemember.isRehydrated,
  );

  const isMounted = useSyncExternalStore(
    emptySubscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  if (!isMounted || !isRehydrated) return;

  return <>{children}</>;
};

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <Suspense fallback={<div>Loading...</div>}>
        <Rehydrated>{children}</Rehydrated>
      </Suspense>
    </Provider>
  );
}
