export default function active(pathname: string) {
  console.log(pathname === "/");
  return pathname === "/";
}
