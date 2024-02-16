function a() {
  const x = 10;
  function b() {
    function c() {
      console.log(x);
    }
    c();
  }
  b();
}
a();


