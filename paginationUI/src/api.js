const BASE_API_URL = "http://localhost:8080";

const getData = async (page = 0, size = 10) => {
  try {
    const response = await fetch(
      `${BASE_API_URL}/student?page=${page}&size=${size}`,
    );

    if (!response.ok) {
      throw new Error("Failed to fetch students");
    }

    return await response.json();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default getData;
