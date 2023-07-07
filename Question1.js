function mapAsync(array, callback) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completedCount = 0;

    // Iterate over each element in the array
    array.forEach((element, index) => {
      // Perform the asynchronous mapping using the callback
      callback(element)
        .then((mappedValue) => {
          // Store the mapped value
          results[index] = mappedValue;
          completedCount++;

          // Check if all elements have been processed
          if (completedCount === array.length) {
            // Resolve the promise with the mapped results
            resolve(results);
          }
        })
        .catch((error) => {
          // Reject the promise if any mapping fails
          reject(error);
        });
    });
  });
}
