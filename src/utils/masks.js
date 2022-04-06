export function maskCurrency(e) {
  let value = e;

  value = e?.target === undefined ? value : value.target.value;

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.');

  return value;
}

export function maskCPF(e) {
  let value = e;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

  return value;
}
export function maskCNPJ(e) {
  let value = e;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d)/, '$1.$2');
  value = value.replace(/(\d{3})(\d{1,2})/, '$1/$2');
  value = value.replace(/(\d{4})(\d{1,2})$/, '$1-$2');

  return value;
}
export function maskPhoneNumber(e) {
  let value = e;

  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  return value;
}
export function maskMobileNumber(e) {
  let value = e;
  value = value.replace(/\D/g, '');
  value = value.replace(/(\d{2})(\d)/, '($1) $2');
  value = value.replace(/(\d{5})(\d)/, '$1-$2');

  return value;
}
