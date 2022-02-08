declare module 'vue/types/vue' {
  import Vue from "vue";

  interface Vue {
    muted: boolean;
    volume: number;
    htmlElem: HTMLElement;
  }
  
  interface Element {
    play: () => void;
    pause: () => void;
  }

  export default Vue;
};  
