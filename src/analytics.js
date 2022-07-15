function createAnalytics() {
   let counter = 0;
   let destroy = false;

   const listener = () => counter++;

   document.addEventListener('click', listener);

   return {
      destroyed() {
         document.removeEventListener('click', listener);
         destroy = true;
      },
      getClick() {
         if (destroy) {
            return 'Analytics is destroy';
         }
         return counter;
      },
   };
}
window.analytics = createAnalytics();
