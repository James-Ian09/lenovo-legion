// declarations.d.ts
declare module "*.css" {
  const styles: { [className: string]: string };
  export default styles;
}
