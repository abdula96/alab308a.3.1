// Simulating the database functions for the scenario

// Central Database: Returns the name of the database that contains the user data
function central(id) {
  const dbMap = {
    1: "db1",
    2: "db2",
    3: "db3",
    4: "db1",
    5: "db2",
    6: "db3",
    7: "db1",
    8: "db2",
    9: "db3",
    10: "db1",
  };

  return new Promise((resolve, reject) => {
    if (dbMap[id]) {
      console.log(`central: Found database for ID ${id}: ${dbMap[id]}`);
      resolve(dbMap[id]);
    } else {
      console.error(`central: Invalid user ID ${id}`);
      reject(new Error("Invalid user ID"));
    }
  });
}

// Simulating db1, db2, db3: These return basic user info (username, website, company)
function db1(id) {
  const users = {
    1: {
      username: "johndoe",
      website: "www.johndoe.com",
      company: {
        name: "Doe Enterprises",
        catchPhrase: "Innovating the future",
        bs: "business solutions",
      },
    },
    4: {
      username: "alicej",
      website: "www.alicej.com",
      company: {
        name: "Alice Ventures",
        catchPhrase: "Leading the way",
        bs: "tech solutions",
      },
    },
    7: {
      username: "bobsmith",
      website: "www.bobsmith.com",
      company: {
        name: "Smith Industries",
        catchPhrase: "Delivering excellence",
        bs: "manufacturing",
      },
    },
  };

  return new Promise((resolve, reject) => {
    if (users[id]) {
      console.log(`db1: Data for ID ${id} fetched`);
      resolve(users[id]);
    } else {
      console.error(`db1: No data found for ID ${id}`);
      reject(new Error("db1 failed"));
    }
  });
}

function db2(id) {
  const users = {
    2: {
      username: "janedoe",
      website: "www.janedoe.com",
      company: {
        name: "Doe Innovations",
        catchPhrase: "Creative solutions",
        bs: "design services",
      },
    },
    5: {
      username: "charlie",
      website: "www.charlie.com",
      company: {
        name: "Charlie Corp",
        catchPhrase: "New horizons",
        bs: "consulting",
      },
    },
    8: {
      username: "eveadam",
      website: "www.eveadam.com",
      company: {
        name: "Eve Technologies",
        catchPhrase: "Smart thinking",
        bs: "AI solutions",
      },
    },
  };

  return new Promise((resolve, reject) => {
    if (users[id]) {
      console.log(`db2: Data for ID ${id} fetched`);
      resolve(users[id]);
    } else {
      console.error(`db2: No data found for ID ${id}`);
      reject(new Error("db2 failed"));
    }
  });
}

function db3(id) {
  const users = {
    3: {
      username: "mike123",
      website: "www.mike123.com",
      company: {
        name: "Mike Tech",
        catchPhrase: "Future ready",
        bs: "IT services",
      },
    },
    6: {
      username: "linda_j",
      website: "www.lindaj.com",
      company: {
        name: "Linda Solutions",
        catchPhrase: "Innovation for today",
        bs: "networking",
      },
    },
    9: {
      username: "tomjones",
      website: "www.tomjones.com",
      company: {
        name: "Jones Enterprises",
        catchPhrase: "Excellence first",
        bs: "construction",
      },
    },
    10: {
      username: "emily123",
      website: "www.emily123.com",
      company: {
        name: "Emily Co",
        catchPhrase: "The best of both worlds",
        bs: "design",
      },
    },
  };

  return new Promise((resolve, reject) => {
    if (users[id]) {
      console.log(`db3: Data for ID ${id} fetched`);
      resolve(users[id]);
    } else {
      console.error(`db3: No data found for ID ${id}`);
      reject(new Error("db3 failed"));
    }
  });
}

// Vault Database: Contains sensitive personal information
function vault(id) {
  const sensitiveData = {
    1: {
      name: "John Doe",
      email: "johndoe@example.com",
      address: {
        street: "123 Main St",
        suite: "Apt 4B",
        city: "Metropolis",
        zipcode: "12345",
        geo: { lat: "40.7128", lng: "74.0060" },
      },
      phone: "123-456-7890",
    },
    2: {
      name: "Jane Doe",
      email: "janedoe@example.com",
      address: {
        street: "456 Elm St",
        suite: "Apt 12C",
        city: "Gotham",
        zipcode: "67890",
        geo: { lat: "34.0522", lng: "118.2437" },
      },
      phone: "987-654-3210",
    },
    3: {
      name: "Mike Johnson",
      email: "mikej@example.com",
      address: {
        street: "789 Oak St",
        suite: "Suite 5",
        city: "Star City",
        zipcode: "13579",
        geo: { lat: "51.5074", lng: "0.1278" },
      },
      phone: "555-123-4567",
    },
    4: {
      name: "Alice Johnson",
      email: "alicej@example.com",
      address: {
        street: "101 Pine St",
        suite: "Apt 6D",
        city: "Sunnydale",
        zipcode: "24680",
        geo: { lat: "48.8566", lng: "2.3522" },
      },
      phone: "222-333-4444",
    },
    5: {
      name: "Charlie Brown",
      email: "charlieb@example.com",
      address: {
        street: "102 Maple St",
        suite: "Suite 7",
        city: "Riverside",
        zipcode: "54321",
        geo: { lat: "40.7306", lng: "73.9352" },
      },
      phone: "333-444-5555",
    },
    6: {
      name: "Linda Johnson",
      email: "lindaj@example.com",
      address: {
        street: "103 Birch St",
        suite: "Apt 9E",
        city: "Hill Valley",
        zipcode: "11111",
        geo: { lat: "51.1657", lng: "10.4515" },
      },
      phone: "444-555-6666",
    },
    7: {
      name: "Bob Smith",
      email: "bobsmith@example.com",
      address: {
        street: "104 Cedar St",
        suite: "Apt 2F",
        city: "Springfield",
        zipcode: "22222",
        geo: { lat: "34.0522", lng: "118.2437" },
      },
      phone: "555-666-7777",
    },
    8: {
      name: "Eve Adams",
      email: "eveadams@example.com",
      address: {
        street: "105 Redwood St",
        suite: "Suite 8",
        city: "Greenwich",
        zipcode: "33333",
        geo: { lat: "40.7488", lng: "73.9857" },
      },
      phone: "666-777-8888",
    },
    9: {
      name: "Tom Jones",
      email: "tomjones@example.com",
      address: {
        street: "106 Willow St",
        suite: "Apt 3H",
        city: "Lakewood",
        zipcode: "44444",
        geo: { lat: "52.3791", lng: "4.9009" },
      },
      phone: "777-888-9999",
    },
    10: {
      name: "Emily Clark",
      email: "emilyclark@example.com",
      address: {
        street: "107 Chestnut St",
        suite: "Apt 1A",
        city: "Pleasantville",
        zipcode: "55555",
        geo: { lat: "40.7128", lng: "74.0060" },
      },
      phone: "888-999-0000",
    },
  };

  return new Promise((resolve, reject) => {
    if (sensitiveData[id]) {
      console.log(`vault: Sensitive data for ID ${id} fetched`);
      resolve(sensitiveData[id]);
    } else {
      console.error(`vault: No sensitive data found for ID ${id}`);
      reject(new Error("Vault failed"));
    }
  });
}

// The main function to gather the complete user data
async function getUserData(id) {
  try {
    // Step 1: Get the database name from the central database
    const dbName = await central(id);
    // Check for invalid database name
    const dbs = { db1, db2, db3 };

    if (!dbs[dbName]) {
      throw new Error(`Invalid database name returned: ${dbName}`);
    }

    console.log(`Fetching data from ${dbName}...`);

    // Step 2: Access the relevant user data database (db1, db2, or db3)
    const userData = await dbs[dbName](id);

    // Step 3: Access the vault database to get sensitive information
    const sensitiveData = await vault(id);

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

    console.log("User data successfully retrieved:", result);
    return result;
  } catch (error) {
    console.error("Error occurred:", error.message);
    return Promise.reject(`Error retrieving data: ${error.message}`);
  }
}

// Testing the function
getUserData(1)
  .then((data) => console.log("Result:", data))
  .catch((error) => console.error("Error:", error));
