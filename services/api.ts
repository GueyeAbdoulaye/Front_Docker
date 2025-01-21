export function useApi<T>(url: string, options?: { [key: string]: any }) {
    const xsrfToken = useCookie("XSRF-TOKEN");

    return $fetch<T>(url, {
        baseURL: "http://localhost:80",
        credentials: "include",
        headers: {
            "X-XSRF-TOKEN": xsrfToken.value || "",
        },
        ...options,
    });
}
