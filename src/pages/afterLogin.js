import BackendService from "src/BackendService";

export default async function(bindAccess) {
  var user = await BackendService.getCurrentUser();
  bindAccess.$store.commit("setUser", user);
  if (bindAccess.$route.query.redirect) {
    bindAccess.$router.push(bindAccess.$route.query.redirect);
  } else bindAccess.$router.push("/home");
}
