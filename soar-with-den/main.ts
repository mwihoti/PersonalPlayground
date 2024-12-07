function foo(): string {
  return "foo"
}

if (import.meta.main) {
  const foobar = "bartender";
  const barSoap = foobar.length;
  
  console.log(foo(), barSoap)
}