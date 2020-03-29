export default async img => {
  const form = new FormData();
  form.append('file', img);
  form.append('upload_preset', 'shopping');
  const res = await fetch(
    'http://api.cloudinary.com/v1_1/germancutraro/image/upload',
    { method: 'POST', body: form }
  );
  const file = await res.json();
  return file;
};
