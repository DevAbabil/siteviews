export const isVisited = ((): boolean => {
  const key =
      "!X?vtl0:`r#wekY{}03S4`5>==/?s@9D$;VK4<ra<7B|Qj;vz5oU&O|P:5ffpLr0",
    value = "+zX+t0O/BHsC~(.{y+)){7Y7Y|1>LFfhq(RIRgh>n=&9Ww.W@J-LbpV$0DYb1m[>";

  let visited = sessionStorage.getItem(key) === value;

  if (!visited) {
    sessionStorage.setItem(key, value);
    return false;
  }
  {
    return visited;
  }
})();

export const isLocal: boolean = ["MTI3LjAuMC4x", "bG9jYWxob3N0"].includes(
  btoa(location.hostname)
);
