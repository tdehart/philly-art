async function getData(route) {
  try {
    const response = await fetch(`api/${route}`);

    if (!response.ok) {
      throw new Error(`${response.status}: ${response.statusText}`);
    }

    return await response.json();
  } catch (err) {
    return null;
  }
}

export default async function getArtists() {
  return await getData("artists");
}

