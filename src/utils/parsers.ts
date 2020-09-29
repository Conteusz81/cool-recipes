export const pathNameSlice = (pathname: string) => {
    return pathname.slice(1).replace("-", " ");
}
