const Bazinga = {
  name: window?.location.hostname ?? 'Bazinga',
  urlSearchParams: new URLSearchParams({ foo: 'bar' }), // not supported by ie11
  mySymbol: Symbol('mySymbol'),
  repeatedString: 'repeatedString'.repeat(10),
  myMap: new Map(),
};

Promise.any([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)]).then(
  console.log
);
Promise.any([Promise.reject(1), Promise.reject(2), Promise.reject(3)]).catch(
  ({ errors }) => console.log(errors)
);

for (let [_, d, D] of '1111a2b3cccc'.matchAll(/(\d)(\D)/g)) {
  console.log(d, D);
}



export default Bazinga
