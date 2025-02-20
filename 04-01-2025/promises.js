function fetchData() {
    return new Promise((resolve, reject) => {
      console.log("Fetching data...");
      setTimeout(() => {
        const isSuccess = Math.random() > 0.5; 
        if (isSuccess) {
          resolve({ id: 1, name: "Alice", role: "Developer" });
        } else {
          reject("Error: Unable to fetch data.");
        }
      }, 2000);  
    });
  }
  
  
  function processData() {
    fetchData()
      .then((data) => {
        console.log("Data fetched:", data);
        console.log("Processing data...");
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({ ...data, processed: true });
          }, 1500); 
        });
      })
      .then((processedData) => {
        console.log("Processed data:", processedData);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Operation completed.");
      });
  }
   
  processData();
  