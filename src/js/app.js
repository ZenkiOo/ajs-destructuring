export default function destructur(arr) {
  const destArr = [];
  arr.forEach((el) => {
    const {
      id: objectId,
      name: objectName,
      icon: objectIcon,
      description: objectDescription = 'Описание недоступно',
    } = el;
    destArr.push({
      id: objectId,
      name: objectName,
      icon: objectIcon,
      description: objectDescription,
    });
  });
  return destArr;
}
