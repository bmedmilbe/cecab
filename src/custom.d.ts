// custom.d.ts
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}

declare module "swiper";
declare module "swiper/css";
declare module "swiper/css/bundle";
