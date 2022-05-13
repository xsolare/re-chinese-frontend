export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive("clickOutside", {
    created (
      el: {
        clickOutsideEvent: { (event: any): void; (this: HTMLElement, ev: MouseEvent): any }
        contains: (arg0: any) => any
      },
      binding: {
        value: {
          refs?: []
          callback: (value: boolean) => void
        }
      },
      vnode: any
    ) {
      el.clickOutsideEvent = function (event) {
        let node: boolean = el.contains(event.target);

        // ? if many target in -> /composable/events/useClickOutside.ts
        if (!node && !(!binding.value?.refs || binding.value?.refs.length === 0)) {
          node = binding.value.refs.find((x: any) => x?.current?.contains(event?.target as Node));
        }

        if (!node) {
          binding.value.callback(false);
        }
      };

      document.body.addEventListener("mousedown", el.clickOutsideEvent);
    },
    unmounted (el: { clickOutsideEvent: (this: HTMLElement, ev: MouseEvent) => any }) {
      document.body.removeEventListener("mousedown", el.clickOutsideEvent);
    }
  });
});
