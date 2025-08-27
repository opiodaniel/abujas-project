// tells TypeScript that it's okay to import CSS files from Swiper.

declare module 'swiper/css' {
    const content: any;
    export default content;
  }
  
  declare module 'swiper/css/navigation' {
    const content: any;
    export default content;
  }
  
  declare module 'swiper/css/pagination' {
    const content: any;
    export default content;
  }
  
  declare module 'swiper/css/scrollbar' {
    const content: any;
    export default content;
  }