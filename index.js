// Simulated central, db1, db2, db3, and vault functions for this scenario

const central = async (id) => {
  if (id < 1 || id > 10) {
    return Promise.reject("Invalid user ID");
  }

  // Simulate the mapping to different databases for valid IDs
  if (id <= 3) return "db1";
  if (id <= 6) return "db2";
  return "db3";
};

const db1 = async (id) => {
  // Simulating db1 - returning valid data for any id except 2 (fixed issue)
  if (id === 2) {
    return {
      // Return valid data for id = 2, instead of throwing an error
      username: "janedoe",
      website: "www.janedoe.com",
      company: {
        name: "Doe Innovations",
        catchPhrase: "Creative solutions",
        bs: "design services",
      },
    };
  }
  return {
    username: "johndoe",
    website: "www.johndoe.com",
    company: {
      name: "Doe Enterprises",
      catchPhrase: "Innovating the future",
      bs: "business solutions",
    },
  };
};

const db2 = async (id) => {
  return {
    username: "janedoe",
    website: "www.janedoe.com",
    company: {
      name: "Doe Innovations",
      catchPhrase: "Creative solutions",
      bs: "design services",
    },
  };
};

const db3 = async (id) => {
  return {
    username: "jackdoe",
    website: "www.jackdoe.com",
    company: {
      name: "Doe Solutions",
      catchPhrase: "Innovative strategies",
      bs: "tech consulting",
    },
  };
};

const vault = async (id) => {
  // Simulating vault - throwing error for id = 10 as an example
  if (id === 10) {
    throw new Error("Error in vault");
  }
  return {
    name: "John Doe",
    email: "johndoe@example.com",
    address: {
      street: "123 Main St",
      suite: "Apt 4B",
      city: "Metropolis",
      zipcode: "12345",
      geo: {
        lat: "40.7128",
        lng: "74.0060",
      },
    },
    phone: "123-456-7890",
  };
};

// Main function to gather the complete user data
async function getUserData(id) {
  try {
    console.log(`Received ID: ${id}`);

    // Step 1: Check for invalid ID or data type
    if (typeof id !== "number" || id < 1 || id > 10) {
      console.error("Invalid ID or data type detected");
      throw new Error("Invalid user ID or data type");
    }

    // Step 2: Get the database name from the central database
    const dbName = await central(id);
    console.log(`Database determined: ${dbName}`);

    // Step 3: Determine the correct database to query (db1, db2, or db3)
    const dbs = { db1, db2, db3 };

    if (!dbs[dbName]) {
      console.error(`Invalid database name: ${dbName}`);
      throw new Error(`Invalid database name returned: ${dbName}`);
    }

    // Fetch data concurrently from dbs and vault
    const [userData, sensitiveData] = await Promise.all([
      dbs[dbName](id), // Fetch user info (username, website, company)
      vault(id), // Fetch sensitive info (name, email, address, phone)
    ]);

    // Step 4: Combine all the data into a single object
    const result = {
      id: id,
      name: sensitiveData.name,
      username: userData.username,
      email: sensitiveData.email,
      address: sensitiveData.address,
      phone: sensitiveData.phone,
      website: userData.website,
      company: userData.company,
    };

    return result;
  } catch (error) {
    console.error("Error occurred:", error.message); // Log detailed error
    return Promise.reject(`Error retrieving data: ${error.message}`);
  }
}

// Testing the function with various IDs

// Test with valid ID (e.g., 1)
getUserData(1)
  .then((data) => console.log("Result:", data))
  .catch((error) => console.error("Error:", error));

// Test with invalid ID (e.g., 15)
getUserData(15)
  .then((data) => console.log("Result:", data))
  .catch((error) => console.error("Error:", error));

// Test with invalid data type (e.g., string)
getUserData("string")
  .then((data) => console.log("Result:", data))
  .catch((error) => console.error("Error:", error));

// Test with invalid ID (e.g., -1)
getUserData(-1)
  .then((data) => console.log("Result:", data))
  .catch((error) => console.error("Error:", error));

// Test with valid ID (e.g., 2)
getUserData(2)
  .then((data) => console.log("Result:", data))
  .catch((error) => console.error("Error:", error));
