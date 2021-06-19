function ok(id=1) {
    console.log(id);
  }
ok(2);
var value=1;
function render(item=value)
{
  return item ;
}
console.log(
  render(2)
);