export const today = () => {
  return new Date()
    .toLocaleDateString('ja-JP', { day: '2-digit', month: '2-digit', year: 'numeric' })
    .replaceAll('/', '-');
};
