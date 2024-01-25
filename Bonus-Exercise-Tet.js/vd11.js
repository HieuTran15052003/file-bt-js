function sample (param1) {
if (param1 === undefined) {
throw new Error('Thiếu tham số!');
}
return param1;
}
 mandatory = () = { throw new Error('Thiếu tham số!'); }
=
sample (param1=mandatory()) => param1