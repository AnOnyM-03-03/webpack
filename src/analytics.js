import * as $ from 'jquery'
function createAnalytics() {
   let counter = 0;
   let destroy = false;

   const listener = () => counter++;

   $(document).on('click', listener);

   return {
      destroyed() {
         $(document).off('click', listener);
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
