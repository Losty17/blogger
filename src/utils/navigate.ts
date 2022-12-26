import { Router } from "vue-router";

export default (router: Router) => (e: Event, path: string) => {
  e.preventDefault();
  router.push(path);
};
