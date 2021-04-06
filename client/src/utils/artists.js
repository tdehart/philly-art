async function getData(route) {
  try {
    const response = await fetch(`/api/${route}`);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    return null;
  }
}

async function getAll() {
  return await getData('artists');
}

async function getById(id) {
  return await getData(`artist/${id}`);
}

export { getAll, getById };
