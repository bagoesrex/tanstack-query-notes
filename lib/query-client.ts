import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            // -- structural sharing --
            // structuralSharing: false // always create a new data reference

            // -- structural sharing example --
            // structuralSharing: (oldData, newData) => {
            //     // example: only update if array length's different
            //     if (Array.isArray(oldData) && Array.isArray(newData)) {
            //         return oldData.length === newData.length ? oldData : newData;
            //     }
            //     // fallback: use new data
            //     return newData;
            // },

            // -- network mode --
            // networkMode: "online" // default

            // -- window focus refetching --
            // refetchOnWindowFocus: true //default
        }
    }
});
