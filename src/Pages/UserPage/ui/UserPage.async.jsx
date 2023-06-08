import { lazy } from "react";

export const UserPageAsync = lazy(() => new Promise((resolve) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    setTimeout(() => resolve(import('./UserPage')), 1500);
}));